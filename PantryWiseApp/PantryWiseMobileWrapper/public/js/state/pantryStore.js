    dayTitles.forEach(d => {
        const head = document.createElement('div');
        head.style.fontSize = '11px';
        head.style.fontWeight = '800';
        head.style.color = 'var(--text-secondary)';
        head.innerText = d;
        grid.appendChild(head);
    });

    // Plotted 35 visual forecast squares
    for (let day = 1; day <= 35; day++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-cell-block';
        cell.innerText = day;

        // Highlight exiries risk days matching our mockup data parameters
        if (day === 22) {
            cell.className += ' cell-danger';
            cell.title = "Sourdough Toast Bread expires!";
        }
        if (day === 23 || day === 24) {
            cell.className += ' cell-warning';
        }

        grid.appendChild(cell);
    }
}

function renderDashboardLowStockScrolls() {
    const wrapper = document.getElementById('dashboardLowStockScroll');
    wrapper.innerHTML = '';

    const lowStocks = pantryItems.filter(i => i.daysLeft <= 3);
    if (lowStocks.length === 0) {
        wrapper.innerHTML = `<span style="font-size:12px; color:var(--text-secondary); padding:10px 0;">All quantities optimal ✅</span>`;
        return;
    }

    lowStocks.forEach(item => {
        const card = document.createElement('div');
        card.className = 'app-premium-card';
        card.style.minWidth = '160px';
        card.style.padding = '12px';
        card.style.textAlign = 'center';

        card.innerHTML = `
                    <span style="font-size:30px;">${item.image}</span>
                    <strong style="font-size:12.5px; display:block; margin-top:6px;">${item.name}</strong>
                    <div style="margin-top:6px; display:flex; justify-content:center; gap:6px; flex-wrap:wrap;">
                        <span class="app-badge ${item.status === 'danger' ? 'app-badge-danger' : 'app-badge-warning'}">${item.daysLeft}d left</span>
                        <button class="app-btn app-btn-primary app-btn-sm" style="width:100%; border-radius:6px; height:24px; font-size:10px;" onclick="addLowStockItemToChecklist('${item.name}')">+ Replenish</button>
                    </div>
                `;
        wrapper.appendChild(card);
    });
}

function addLowStockItemToChecklist(name) {
    shoppingChecklist.unshift({
        id: Date.now(),
        name: name,
        quantity: 1,
        unit: "pack",
        checked: false,
        store: "Walmart",
        assigned: "Harish"
    });
    logActivity("fa-solid fa-cart-plus", "info", `<strong>You</strong> auto-added low stock ${name} to shopping list`);
    renderShoppingChecklists();
    showSystemToast("Pantry Replenished", `${name} added to Shopping List`);
    fireCelebrationConfettiLoop();
}

// ==========================================================================
// VIEW NAVIGATION DIRECTORIES ROUTING
// ==========================================================================
function routeToView(viewId) {
    activeView = viewId;
    document.querySelectorAll('.app-view-panel').forEach(p => p.classList.remove('active-panel'));
    document.getElementById(`view-${viewId}`).classList.add('active-panel');

    // Highlight sidebar & bottom nav items matching target viewId
    document.querySelectorAll('.nav-menu-item').forEach(i => i.classList.remove('active'));
    document.querySelectorAll('.mobile-nav-btn').forEach(i => i.classList.remove('active'));

    const sidebarEl = document.getElementById(`deskNav-${viewId}`);
    if (sidebarEl) sidebarEl.classList.add('active');

    const mobileEl = document.getElementById(`mobNav-${viewId}`);
    if (mobileEl) mobileEl.classList.add('active');
}

// ==========================================================================
// SMART INVENTORY MODULE CONTROLLERS
// ==========================================================================