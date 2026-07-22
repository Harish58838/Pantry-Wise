
    // Update budget metrics dynamically
    document.getElementById('budgetSpentText').innerText = `Spent: $${spent.toFixed(2)}`;
    document.getElementById('budgetPercentText').innerText = percent + "%";
    document.getElementById('budgetLimitMeterBar').style.width = percent + "%";

    if (total === 0) {
        container.innerHTML = `
                    <div style="text-align:center; padding:40px 16px; color:var(--text-secondary); display:flex; flex-direction:column; align-items:center; gap:12px;">
                        <div style="width:56px; height:56px; border-radius:50%; background:rgba(var(--primary-rgb), 0.12); display:flex; align-items:center; justify-content:center; border: 1.5px solid rgba(var(--primary-rgb), 0.25);">
                            <i class="fa-solid fa-circle-check" style="font-size:24px; color:var(--primary);"></i>
                        </div>
                        <div>
                            <strong style="font-family:var(--font-display); font-size:14.5px; color:var(--text-primary); display:block;">Checklist perfectly complete</strong>
                            <span style="font-size:12px; color:var(--text-secondary); display:block; margin-top:2px;">All household ingredients are currently stocked!</span>
                        </div>
                    </div>
                `;
        return;
    }

    shoppingChecklist.forEach(item => {
        const card = document.createElement('div');
        card.className = 'swipe-item-foreground';
        card.style.borderRadius = '12px';
        card.style.border = '1px solid var(--border)';
        card.style.padding = '12px 16px';
        card.style.opacity = item.checked ? '0.6' : '1';

        card.innerHTML = `
                    <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="toggleShoppingItemCheckedState(${item.id})" style="width:20px; height:20px; cursor:pointer; accent-color:var(--primary);">
                    <div style="flex:1;">
                        <strong style="font-size:13.5px; text-decoration: ${item.checked ? 'line-through' : 'none'};">${item.name}</strong>
                        <span style="font-size:11px; color:var(--text-secondary); display:block; margin-top:2px;">${item.quantity} ${item.unit} · ${item.store}</span>
                    </div>
                    <span class="app-badge" style="background:var(--surface-2); font-size:10px;">${item.assigned}</span>
                `;
        container.appendChild(card);
    });
}

function toggleShoppingItemCheckedState(id) {
    const item = shoppingChecklist.find(i => i.id === id);
    if (item) {
        item.checked = !item.checked;
        if (item.checked) {
            logActivity("fa-solid fa-check", "info", `<strong>You</strong> checked off ${item.name} from shopping list`);
            fireCelebrationConfettiLoop();
            showSystemToast("Item Checked", "Budget parameters synched.");
        } else {
            logActivity("fa-solid fa-rotate-left", "warning", `<strong>You</strong> unchecked ${item.name} on shopping list`);
        familyMembers,
        recentActivity
    };
    localStorage.setItem(`pantryWise_user_${currentUserId}`, JSON.stringify(data));
}

let activeView = 'dashboard';
let pantryCategoryFilter = 'All';
let pantryLayoutType = 'grid';
let activeScannerMode = 'ocr'; // 'ocr' or 'barcode'

// ==========================================================================
// AUTHENTICATION FLOW MANAGEMENTS (STAGE 1 - 9)
// ==========================================================================
function navigateAuthStage(stage) {
    document.querySelectorAll('.auth-slider-stage').forEach(s => s.classList.remove('active-stage'));
    document.getElementById(`authStage-${stage}`).classList.add('active-stage');

    // If going to OTP screen, simulate OTP auth complete after 2 seconds
    if (stage === 7) {
        setTimeout(() => {
            const signupName = document.getElementById('signupName').value || 'New User';
            const userId = signupName.toLowerCase().replace(/[^a-z0-9]/g, '');
            loadUserData(userId, signupName);
            completeAppLoginFlow();
        }, 2000);
    }
}

function triggerBiometricBypass() {
    showSystemToast("Biometric Scan", "FaceID scanned. Synchronizing profile datasets...");
    loadUserData('harish', 'Harish');
    completeAppLoginFlow();
}

async function sendPasswordResetEmail() {
    const email = document.getElementById('recoverEmailInput').value;
    if (!email) return alert("Please enter your email.");

    // Mock Email Sending with OTP
    alert(`MOCK EMAIL SENT to ${email}!\n\nSubject: Password Reset Request\nYour OTP is: 1234`);
    navigateAuthStage(10);
}
