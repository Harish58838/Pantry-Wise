        el.title = `${item.name} (${item.quantity} ${item.unit})`;
        el.innerHTML = `
                    <span style="font-size:36px; display:block; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5)); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">${item.image}</span>
                    <span style="font-size:9px; color:#94A3B8; font-weight:800; display:block;">${item.name.split(' ')[0]}</span>
                `;

        // Distribute Shelf items
        if (index % 2 === 0) {
            topShelf.appendChild(el);
        } else {
            bottomShelf.appendChild(el);
        }
    });

    if (fridgeItems.length === 0) {
        topShelf.innerHTML = `<span style="color:#475569; font-size:12px;">Fridge shelves empty. Add items from Pantry!</span>`;
    }
}

function updateFridgeCompartmentTempDisplay(val) {
    document.getElementById('fridgeCompartmentTempDisplay').innerText = val + "°F";
    document.getElementById('dashboardFridgeSensorText').innerText = `Internal Temp: ${val}°F · Door Closed`;
    showSystemToast("Temp Synced", `Fridge climate adjusted to ${val}°F`);
}

// ==========================================================================
// FAMILY HUB ACCESS CONTROLS
// ==========================================================================
function renderFamilySyncHubLists() {
    const list = document.getElementById('familyListContainer');
    list.innerHTML = '';

    const permissions = document.getElementById('familyPermissionsControlWrapper');
    permissions.innerHTML = '';

    familyMembers.forEach(member => {
        const card = document.createElement('div');
        card.className = 'swipe-item-foreground';
        card.style.borderRadius = '12px';
        card.style.border = '1px solid var(--border)';
        card.style.alignItems = 'center';

        let deleteBtnHtml = '';
        if (member.role !== 'Admin') {
            deleteBtnHtml = `<button class="app-btn app-btn-ghost app-btn-sm" style="color:var(--danger); padding:4px 8px; margin-left:8px;" onclick="removeFamilyMember('${member.name}')"><i class="fa-solid fa-trash-can"></i></button>`;
        }
        card.innerHTML = `
                    <div style="font-size:24px; width:40px; height:40px; border-radius:50%; background:var(--surface-2); display:flex; align-items:center; justify-content:center;">${member.avatar}</div>
                    <div style="flex:1;">
                        <strong style="font-size:13.5px; font-family:var(--font-display);">${member.name}</strong>
                        <span style="font-size:11px; color:var(--text-secondary); display:block; margin-top:2px;">${member.email}</span>
                    </div>
                    <span class="app-badge" style="background:var(--surface-2);">${member.role}</span>
                    ${deleteBtnHtml}
                `;
        list.appendChild(card);

        // Permissions switches
        if (member.role !== 'Admin') {
            const row = document.createElement('div');
            row.className = 'switch-ds-row';
            row.innerHTML = `
    const total = pantryItems.length;
    const freshness = total === 0 ? 100 : Math.max(0, Math.round(((total - expiring) / total) * 100));
    if (bannerP) bannerP.textContent = `Your household pantry is ${freshness}% fresh. ${expiring} item${expiring !== 1 ? 's' : ''} need${expiring === 1 ? 's' : ''} attention.`;
}

function recalculateFreshnessIndexGauges() {
    const total = pantryItems.length;
    if (total === 0) {
        setCircularRingGauges(100, "Storage Empty");
        return;
    }

    const expiredOrExpiring = pantryItems.filter(i => i.daysLeft <= 3).length;
    const freshnessPercent = Math.max(0, Math.round(((total - expiredOrExpiring) / total) * 100));

    setCircularRingGauges(freshnessPercent, `${expiredOrExpiring} products expiring soon`);
}

function setCircularRingGauges(percent, descText) {
    const fillCircle = document.getElementById('dashboardFreshnessCircle');
    const circumference = 2 * Math.PI * 32; // r=32 -> 201
    const offset = circumference - (percent / 100) * circumference;
    fillCircle.style.strokeDashoffset = offset;

    document.getElementById('dashboardFreshnessVal').innerText = percent + "%";
    document.getElementById('dashboardFreshnessDesc').innerText = descText;
}

function renderDashboardHeatmapsForecasts() {
    const grid = document.getElementById('dashboardCalendarGrid');
    grid.innerHTML = '';

    const dayTitles = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];