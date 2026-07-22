function toggleFamilyMemberPermissionState(name, permissionKey) {
    const member = familyMembers.find(f => f.name === name);
    if (member) {
        member.permissions[permissionKey] = !member.permissions[permissionKey];
        showSystemToast("Permissions Synced", `${name} access limits updated.`);
    }
}

function removeFamilyMember(name) {
    if (!confirm(`Are you sure you want to remove ${name} from your household?`)) return;
    familyMembers = familyMembers.filter(f => f.name !== name);
    showSystemToast("Member Removed", `${name} access revoked.`);
    reloadAppUIRenderers();
}

function openInviteFamilyMemberPrompt() {
    const name = prompt("Enter family member full name:");
    if (!name) return;

    familyMembers.push({
        name: name,
        role: "Editor",
        email: name.toLowerCase().replace(" ", "") + "@family.com",
        avatar: "👧",
        permissions: { add: true, edit: true, delete: false }
    });

    reloadAppUIRenderers();
    fireCelebrationConfettiLoop();
    showSystemToast("Invitation Synced", "New profile registered.");
}

// ==========================================================================
// SUPABASE DATABASE LOGGING SETUP
// ==========================================================================
async function logUserAction(actionName, extraDetails) {
    const sb = getSupabase();
    if (!sb) return;
    const { data: { user } } = await sb.auth.getUser();
    if (user) {
        await sb.from('activity_logs').insert([
            { user_id: user.id, action: actionName, details: extraDetails }
        ]);
    }
}

// ==========================================================================
// SCANNERS SIMULATORS OVERLAYS
// ==========================================================================
function openSimulatedScanner(mode) {
    activeScannerMode = mode;
    const modal = document.getElementById('scannerSimulatorModal');
    const title = document.getElementById('scannerTitle');
    const icon = document.getElementById('scannerIcon');
    const help = document.getElementById('scannerHelperText');

    if (mode === 'ocr') {
        title.innerText = "OCR checkout receipt scanner";
        icon.className = "fa-solid fa-receipt";
        help.innerText = "Focus scanner camera over receipt layout lines";
    } else {
        title.innerText = "Barcode Laser Scanner active";
        icon.className = "fa-solid fa-barcode";
        help.innerText = "Center item UPC code within target indicators";
    }

    modal.style.display = 'flex';
}

function closeScannerSimulator() {
    document.getElementById('scannerSimulatorModal').style.display = 'none';
}

function completeSimulatedScanPipeline() {
    const title = document.getElementById('scannerTitle');
    const help = document.getElementById('scannerHelperText');

    title.innerText = "Analyzing optical frames...";
    help.innerText = "Decrypting cloud product matrices...";

    setTimeout(() => {
        closeScannerSimulator();

        if (activeScannerMode === 'ocr') {
            pantryItems.unshift({
                id: Date.now(),
                name: "Fresh Strawberries Box",
                category: "Fruits",
                quantity: 1,
                unit: "box",
                expiry: "2026-05-29",
                daysLeft: 8,
                status: "success",
                image: "🍓",
                location: "Fridge"