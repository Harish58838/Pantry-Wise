        alert("Signup failed: " + error.message);
        return;
    }

    if (data.session == null && data.user != null) {
        alert("Account created! Please check your email to confirm your account before logging in.");
        navigateAuthStage(5); // Go back to login screen
        return;
    }

    alert("Account created successfully! Logging you in...");

    const userId = data.user.id;
    loadUserData(userId, signupName);
    completeAppLoginFlow();
}

// ==========================================================================
// DYNAMIC RENDERING RELOADS FOR HOME DASHBOARDS
// ==========================================================================
function reloadAppUIRenderers() {
    recalculateFreshnessIndexGauges();
    renderDashboardHeatmapsForecasts();
    renderDashboardLowStockScrolls();
    renderPantryInventoryGridList();
    renderShoppingChecklists();
    renderFamilySyncHubLists();
    renderFridgeShelfItems();
    updateDashboardStatCards();
    updateWelcomeBanner();
    updateInventorySummary();
    updateShoppingProgress();
    simulateIoTSensors();
    renderActivityTimeline();
    saveCurrentUserData(); // Persist all real-time mutations
}

function logActivity(icon, color, text) {
    recentActivity.unshift({
        id: Date.now(),
        icon: icon,
        color: color,
        text: text,
        time: "Just now"
    });
    if (recentActivity.length > 10) recentActivity.pop(); // keep last 10
}

function renderActivityTimeline() {
    const container = document.getElementById('recentActivityContainer');
    if (!container) return;
    container.innerHTML = '';

    recentActivity.forEach(act => {
        // rgb calculation for background opacity
        const isHex = act.color.startsWith('#');
        let bgStyle = isHex ? `background:${act.color}22; color:${act.color};` : `background:rgba(var(--${act.color}-rgb), 0.12); color:var(--${act.color});`;
        if (act.color === '#A855F7') bgStyle = `background:rgba(168, 85, 247, 0.12); color:#A855F7;`;

        const itemHTML = `
                    <div class="timeline-item">
                        <div class="timeline-dot" style="${bgStyle}">
                            <i class="${act.icon}"></i>
                        </div>
                        <div>
                            <div class="timeline-text">${act.text}</div>
                            <span class="timeline-time">${act.time}</span>
                        </div>
                    </div>
                `;
        container.innerHTML += itemHTML;
    });
}

function updateInventorySummary() {
    const sumTotal = document.getElementById('summaryTotal');
    const sumFridge = document.getElementById('summaryFridge');
    const sumPantry = document.getElementById('summaryPantry');
    const sumCounter = document.getElementById('summaryCounter');

    if (sumTotal) sumTotal.textContent = pantryItems.length;
    if (sumFridge) sumFridge.textContent = pantryItems.filter(i => i.location === 'Fridge').length;
    if (sumPantry) sumPantry.textContent = pantryItems.filter(i => i.location === 'Pantry').length;
    if (sumCounter) sumCounter.textContent = pantryItems.filter(i => i.location === 'Counter').length;
}

function updateShoppingProgress() {
    const total = shoppingChecklist.length;
    const checked = shoppingChecklist.filter(i => i.checked).length;
    const percentage = total === 0 ? 0 : Math.round((checked / total) * 100);

    const ring = document.getElementById('shoppingProgressRing');
    const text = document.getElementById('shoppingProgressText');
    const sub = document.getElementById('shoppingProgressSubtitle');
