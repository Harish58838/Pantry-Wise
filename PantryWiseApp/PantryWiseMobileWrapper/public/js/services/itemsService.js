        return;
    }

    if (pantryLayoutType === 'grid') {
        const grid = document.createElement('div');
        grid.className = 'responsive-dashboard-grid';

        filtered.forEach(item => {
            const card = document.createElement('div');
            card.className = 'app-premium-card';
            card.innerHTML = `
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-size:32px;">${item.image}</span>
                            <span class="app-badge ${item.status === 'danger' ? 'app-badge-danger' : item.status === 'warning' ? 'app-badge-warning' : 'app-badge-success'}">${item.daysLeft}d left</span>
                        </div>
                        <div>
                            <strong style="font-size:14px; font-family:var(--font-display); cursor:pointer;" onclick="openEditPantryItemModal(${item.id})">${item.name} <i class="fa-solid fa-pen" style="font-size:10px; opacity:0.5;"></i></strong>
                            <p style="color:var(--text-secondary); font-size:11.5px; margin-top:2px;">${item.quantity} ${item.unit} · ${item.location}</p>
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px;">
                            <div class="value-stepper">
                                <button class="stepper-action" onclick="updateItemQuantityStepper(${item.id}, -1)">-</button>
                                <span class="stepper-display">${item.quantity}</span>
                                <button class="stepper-action" onclick="updateItemQuantityStepper(${item.id}, 1)">+</button>
                            </div>
                            <button class="app-btn app-btn-ghost app-btn-sm" style="color:var(--danger);" onclick="deletePantryItem(${item.id})"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    `;
            grid.appendChild(card);
        });
        wrapper.appendChild(grid);
    } else {
        // List Layout swipable drawer revealers
        filtered.forEach(item => {
            const wrap = document.createElement('div');
            wrap.className = 'swipe-item-wrapper';
            wrap.innerHTML = `
                        <div class="swipe-actions-under">
                            <div class="under-delete-btn" onclick="deletePantryItem(${item.id})"><i class="fa-solid fa-trash"></i> Delete</div>
                            <div class="under-checklist-btn" onclick="addLowStockItemToChecklist('${item.name}')">+ Checklist</div>
                        </div>
                        <div class="swipe-item-foreground" id="foregroundItem-${item.id}" onmousedown="simulateListItemSwipe(${item.id})">
                            <span style="font-size:30px;">${item.image}</span>
                            <div style="flex:1;">
                                <strong style="font-size:13.5px; font-family:var(--font-display); cursor:pointer;" onclick="openEditPantryItemModal(${item.id})">${item.name} <i class="fa-solid fa-pen" style="font-size:10px; opacity:0.5;"></i></strong>
                                <span style="font-size:11px; color:var(--text-secondary); display:block; margin-top:2px;">${item.quantity} ${item.unit} · Location: ${item.location}</span>
                            </div>
                            <span class="app-badge ${item.status === 'danger' ? 'app-badge-danger' : 'app-badge-success'}">${item.daysLeft}d left</span>
                        </div>
                    `;
            wrapper.appendChild(wrap);
        });
    }
}

function filterPantryCategory(category) {
    pantryCategoryFilter = category;
    document.querySelectorAll('.chip-button').forEach(c => c.classList.remove('active-chip'));
    document.getElementById(`chip-${category}`).classList.add('active-chip');
    renderPantryInventoryGridList();
}

function togglePantryLayout(type) {
    pantryLayoutType = type;
    document.getElementById('layoutGridBtn').style.background = type === 'grid' ? 'var(--surface)' : 'none';
    document.getElementById('layoutListBtn').style.background = type === 'list' ? 'var(--surface)' : 'none';
    renderPantryInventoryGridList();
}

function simulateListItemSwipe(id) {
    const foreground = document.getElementById(`foregroundItem-${id}`);
    foreground.style.transform = 'translateX(-40px)';
    setTimeout(() => { foreground.style.transform = 'translateX(0px)'; }, 1000);
}

function updateItemQuantityStepper(id, change) {
    const item = pantryItems.find(i => i.id === id);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        const action = change > 0 ? "increased" : "decreased";
        logActivity("fa-solid fa-boxes-stacked", "info", `<strong>You</strong> ${action} stock level of ${item.name} to ${item.quantity}`);
        reloadAppUIRenderers();
        showSystemToast("Stock Level Updated", `${item.name} quantity assigned: ${item.quantity}`);
    }
}

function deletePantryItem(id) {
    const item = pantryItems.find(i => i.id === id);
    if (item) {
        logActivity("fa-solid fa-trash", "danger", `<strong>You</strong> deleted ${item.name} from inventory`);
    }
    pantryItems = pantryItems.filter(i => i.id !== id);
    reloadAppUIRenderers();
    showSystemToast("Product Deleted", "Removed from pantry inventory logs.");
}