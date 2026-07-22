
function triggerPantryListReload() {
    renderPantryInventoryGridList();
}

// Add pantry form uploader
function openAddPantryItemModal() {
    document.getElementById('addFoodItemModal').style.display = 'flex';
}

function closeAddPantryItemModal() {
    document.getElementById('addFoodItemModal').style.display = 'none';
}

function saveAddPantryItemForm() {
    const name = document.getElementById('formFoodName').value;
    const qty = parseInt(document.getElementById('formFoodQty').value);
    const unit = document.getElementById('formFoodUnit').value;
    const category = document.getElementById('formFoodCategory').value;
    const expiry = document.getElementById('formFoodExpiry').value;
        }
        reloadAppUIRenderers();
    }
}

function saveCustomShoppingItem() {
    const input = document.getElementById('addShoppingItemName');
    if (!input.value) return;

    shoppingChecklist.unshift({
        id: Date.now(),
        name: input.value,
        quantity: 1,
        unit: "pack",
        checked: false,
        store: "Walmart",
        assigned: "Sarah"
    });

    logActivity("fa-solid fa-cart-plus", "info", `<strong>You</strong> manually added ${input.value} to shopping list`);

    input.value = '';
    reloadAppUIRenderers();
    showSystemToast("Checklist Updated", "Custom shopping item registered.");
}

function triggerAIShortageChecklistBuilder() {
    showSystemToast("AI Forecasting", "Analyzing pantry depletion cycles...");
    setTimeout(() => {
        shoppingChecklist.push({
            id: Date.now(),
            name: "Organic Bananas Bundle",
            quantity: 1,
            unit: "bunch",
            checked: false,
            store: "Walmart",
            assigned: "Sarah"
        });
        reloadAppUIRenderers();
        fireCelebrationConfettiLoop();
        showSystemToast("AI Suggestions Synced", "Bananas shortage replenished.");
    }, 800);
}

function acceptAIDepletionSuggestion() {
    shoppingChecklist.push({
        id: Date.now(),
        name: "Fresh Hass Avocados",
        quantity: 3,
        unit: "pcs",
        checked: false,
        store: "Local Shop",
        assigned: "Sarah"
    });
    reloadAppUIRenderers();
    fireCelebrationConfettiLoop();
    showSystemToast("AI Restock Added", "Hass Avocados shortages added to shopping checklist.");
}

// ==========================================================================
// CONNECTED IOT SMART FRIDGE SHELVES RENDER
// ==========================================================================
function renderFridgeShelfItems() {
    const topShelf = document.getElementById('fridgeShelfTopItems');
    const bottomShelf = document.getElementById('fridgeShelfBottomItems');
    if (!topShelf || !bottomShelf) return;

    topShelf.innerHTML = '';
    bottomShelf.innerHTML = '';

    const fridgeItems = pantryItems.filter(i => i.location === 'Fridge');
    fridgeItems.forEach((item, index) => {
        const el = document.createElement('div');
        el.style.textAlign = 'center';
        el.style.cursor = 'pointer';