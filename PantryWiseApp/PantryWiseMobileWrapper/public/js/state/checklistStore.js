function renderPantryInventoryGridList() {
    const wrapper = document.getElementById('pantryGridItemsWrapper');
    wrapper.innerHTML = '';

    const searchVal = document.getElementById('pantrySearchBox').value.toLowerCase();
    const locationFilter = document.getElementById('pantryLocationSelect').value;

    let filtered = pantryItems;

    const location = document.getElementById('formFoodLocation').value;

    if (!name) {
        alert("Please type a valid item name uploader");
        return;
    }

    pantryItems.unshift({
        id: Date.now(),
        name: name,
        category: category,
        quantity: qty,
        unit: unit,
        expiry: expiry,
        daysLeft: 10,
        status: "success",
        image: "🥗",
        location: location
    });

    closeAddPantryItemModal();
    logActivity("fa-solid fa-plus", "primary", `<strong>You</strong> added ${qty} ${unit} of ${name} to ${location}`);
    reloadAppUIRenderers();
    fireCelebrationConfettiLoop();
    showSystemToast("Product Registered", `${name} added successfully.`);
}

// Edit pantry form uploader
function openEditPantryItemModal(id) {
    const item = pantryItems.find(i => i.id === id);
    if (!item) return;
    document.getElementById('editFormFoodId').value = item.id;
    document.getElementById('editFormFoodName').value = item.name;
    document.getElementById('editFormFoodQty').value = item.quantity;
    document.getElementById('editFormFoodUnit').value = item.unit;
    document.getElementById('editFormFoodCategory').value = item.category;
    document.getElementById('editFormFoodExpiry').value = item.expiry;
    document.getElementById('editFormFoodLocation').value = item.location;
    document.getElementById('editFoodItemModal').style.display = 'flex';
}

function closeEditPantryItemModal() {
    document.getElementById('editFoodItemModal').style.display = 'none';
}

function saveEditPantryItemForm() {
    const id = parseInt(document.getElementById('editFormFoodId').value);
    const item = pantryItems.find(i => i.id === id);
    if (!item) return;

    item.name = document.getElementById('editFormFoodName').value;
    item.quantity = parseInt(document.getElementById('editFormFoodQty').value);
    item.unit = document.getElementById('editFormFoodUnit').value;
    item.category = document.getElementById('editFormFoodCategory').value;
    item.expiry = document.getElementById('editFormFoodExpiry').value;
    item.location = document.getElementById('editFormFoodLocation').value;

    // Recalculate daysLeft
    const expDate = new Date(item.expiry);
    const today = new Date("2026-05-21"); // matching current system local date preset
    const diffTime = expDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    item.daysLeft = diffDays;
    item.status = diffDays <= 1 ? 'danger' : diffDays <= 3 ? 'warning' : 'success';

    closeEditPantryItemModal();
    logActivity("fa-solid fa-pen", "accent", `<strong>You</strong> updated details for ${item.name}`);
    reloadAppUIRenderers();
    fireCelebrationConfettiLoop();
    showSystemToast("Product Updated", `${item.name} revised successfully.`);
}

// ==========================================================================
// SHOPPING LIST COMPONENT CONTROLLERS
// ==========================================================================
function renderShoppingChecklists() {
    const container = document.getElementById('shoppingChecklistContainer');
    container.innerHTML = '';

    const total = shoppingChecklist.length;
    const checkedCount = shoppingChecklist.filter(i => i.checked).length;

    // Calculate dynamic budget limit
    const budgetLimit = parseFloat(document.getElementById('budgetLimitInput')?.value || 200);
    const spent = checkedCount * 8.40 + 20;
    const percent = budgetLimit === 0 ? 0 : Math.min(100, Math.round((spent / budgetLimit) * 100));