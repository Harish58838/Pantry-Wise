    if (ring) {
        const circumference = 138; // 2 * Math.PI * 22
        const offset = circumference - (percentage / 100) * circumference;
        ring.style.strokeDashoffset = offset;
    }
    if (text) text.textContent = `${percentage}%`;
    if (sub) sub.textContent = `${checked} of ${total} items checked off today.`;
}

// ==========================================================================
// IOT COMPRESSOR & THERMAL SIMULATION ENGINE
// ==========================================================================
let iotSimulationInterval = null;
let iotDoorOpen = false;
let iotCurrentTemp = 37.0;
let iotTargetTemp = 37.0;
let iotCompressorOn = false;
let iotPowerHistory = Array(60).fill(10); // Base idle draw 10W

function toggleFridgeDoorState() {
    iotDoorOpen = !iotDoorOpen;
    const btn = document.getElementById('simulateDoorBtn');
    const statusEl = document.getElementById('iotSensorDoor');
    const lightEl = document.getElementById('fridgeInternalLight');
    const camBadge = document.getElementById('cameraStatusBadge');

    if (iotDoorOpen) {
        btn.innerText = "Close Fridge Door";
        btn.classList.replace('app-btn-primary', 'app-btn-secondary');
        btn.style.color = "var(--danger)";
        btn.style.borderColor = "var(--danger)";
        if (statusEl) statusEl.textContent = "OPEN ALARM";
        if (lightEl) lightEl.style.opacity = "1";
        if (camBadge) { camBadge.className = "app-badge app-badge-danger"; camBadge.innerText = "Motion Detected"; }
        showSystemToast("Door Opened", "Internal light activated. Thermal loss accelerating.");
        logActivity("fa-solid fa-door-open", "danger", "<strong>User</strong> opened the main fridge door.");
    } else {
        btn.innerText = "Open Fridge Door";
        btn.classList.replace('app-btn-secondary', 'app-btn-primary');
        btn.style.color = "";

    const interval = setInterval(() => {
        progress += 25;
        showSystemToast("Backing up...", `Uploading database arrays: ${progress}%`);
        if (progress >= 100) {
            clearInterval(interval);
            showSystemToast("Backup Saved", "Active household datasets successfully stored in Cloud Drive ✅");
            fireCelebrationConfettiLoop();
        }
    }, 300);
}

function submitFAQKeyword(keyword) {
    if (!keyword) return;
    const chat = document.getElementById('settingsChatbotLog');
    const input = document.getElementById('pantryBotCmdInput');

    chat.innerHTML += `<div style="text-align:right; margin-bottom:8px;"><strong>You:</strong> ${keyword}</div>`;
    input.value = '';

    // Premium dynamic visual soundwave processor
    const visualizerId = 'voicewave-' + Date.now();
    chat.innerHTML += `
                <div id="${visualizerId}" style="display:flex; align-items:center; gap:6px; margin-bottom:8px;">
                    <strong style="color:var(--primary);">PantryBot:</strong>
                    <span style="font-size:12px; color:var(--text-secondary);">Analyzing patterns</span>
                    <span class="voicewave-container">
                        <span class="voicewave-bar"></span>
                        <span class="voicewave-bar"></span>
                        <span class="voicewave-bar"></span>
                        <span class="voicewave-bar"></span>
                        <span class="voicewave-bar"></span>
                    </span>
                </div>
            `;
    chat.scrollTop = chat.scrollHeight;

    setTimeout(() => {
        const visualizerEl = document.getElementById(visualizerId);
        if (visualizerEl) visualizerEl.remove();

        const query = keyword.toLowerCase();
        if (query.includes('add') && (query.includes('pantry') || query.includes('fridge'))) {
            const match = query.match(/add\s+(\d+)?\s*(.+?)\s+to/);
            let qty = 1;
            let name = "Custom Item";
            if (match) {
                qty = match[1] ? parseInt(match[1]) : 1;
                name = match[2].trim();
            } else {
                name = query.replace('add', '').replace('to pantry', '').replace('to fridge', '').trim();
            }
            name = name.charAt(0).toUpperCase() + name.slice(1);
            pantryItems.unshift({
                id: Date.now(),