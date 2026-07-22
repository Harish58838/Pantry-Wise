    if (e.key === 'Escape') {
        closeCommandPalette();
    }
});

// Real-world client databases state driven by localStorage
let currentUserId = null;
let pantryItems = [];
let shoppingChecklist = [];
let familyMembers = [];
let recentActivity = [];

function initDefaultUserIfNone() {
    if (!localStorage.getItem('pantryWise_user_harish')) {
        const harishData = {
            name: 'Harish',
            pantryItems: [
                { id: 1, name: "Organic Fresh Milk", category: "Dairy", quantity: 2, unit: "liters", expiry: "2026-05-23", daysLeft: 2, status: "warning", image: "🥛", location: "Fridge" },
                { id: 2, name: "Sourdough Toast Bread", category: "Bakery", quantity: 1, unit: "pack", expiry: "2026-05-22", daysLeft: 1, status: "danger", image: "🍞", location: "Pantry" },
                { id: 3, name: "Free-range Grade A Eggs", category: "Dairy", quantity: 12, unit: "pcs", expiry: "2026-06-12", daysLeft: 22, status: "success", image: "🥚", location: "Fridge" },
                { id: 4, name: "Fresh Hass Avocados", category: "Fruits", quantity: 3, unit: "pcs", expiry: "2026-05-24", daysLeft: 3, status: "warning", image: "🥑", location: "Counter" }
            ],
            shoppingChecklist: [
                { id: 101, name: "Organic Strawberries", quantity: 1, unit: "box", checked: false, store: "Walmart", assigned: "Harish" },
                { id: 102, name: "Creamy Peanut Butter", quantity: 1, unit: "jar", checked: true, store: "Instacart", assigned: "David" },
                { id: 103, name: "Greek Style Yogurt Tub", quantity: 2, unit: "cups", checked: false, store: "Local Shop", assigned: "Harish" }
            ],
            familyMembers: [
                { name: "Harish", role: "Admin", email: "harish@family.com", avatar: "👨‍🍳", permissions: { add: true, edit: true, delete: true } },
                { name: "David Johnson", role: "Editor", email: "david.j@family.com", avatar: "👨‍💻", permissions: { add: true, edit: true, delete: false } }
            ],
            recentActivity: [
                { id: 1, icon: "fa-solid fa-user-plus", color: "#A855F7", text: "<strong>System</strong> initialized Harish's workspace", time: "Just now" }
            ]
        };
        localStorage.setItem('pantryWise_user_harish', JSON.stringify(harishData));
    }
}
initDefaultUserIfNone();

function loadUserData(userId, userName) {
    let data = localStorage.getItem(`pantryWise_user_${userId}`);
    if (data) {
        const parsed = JSON.parse(data);
        pantryItems = parsed.pantryItems || [];
        shoppingChecklist = parsed.shoppingChecklist || [];
        familyMembers = parsed.familyMembers || [];
        recentActivity = parsed.recentActivity || [];
        document.getElementById('currentUserLabel').innerText = parsed.name || userName;

        const signupNameEl = document.getElementById('signupName');
        if (signupNameEl) signupNameEl.value = parsed.name || userName;
    } else {
        // Initialize new empty user profile
        pantryItems = [];
        shoppingChecklist = [];
        familyMembers = [{ name: userName, role: "Admin", email: `${userId}@family.com`, avatar: "🧑", permissions: { add: true, edit: true, delete: true } }];
        recentActivity = [{ id: Date.now(), icon: "fa-solid fa-user-plus", color: "#A855F7", text: `<strong>System</strong> created new profile for ${userName}`, time: "Just now" }];

        document.getElementById('currentUserLabel').innerText = userName;
        const signupNameEl = document.getElementById('signupName');
        if (signupNameEl) signupNameEl.value = userName;
    }
    currentUserId = userId;
    saveCurrentUserData(); // Ensure it is saved if new
}

function saveCurrentUserData() {
    if (!currentUserId) return;
    const data = {
        name: document.getElementById('currentUserLabel').innerText,
        pantryItems,
        shoppingChecklist,
    if (pantryCategoryFilter !== 'All') {
        filtered = filtered.filter(i => i.category === pantryCategoryFilter);
    }
    if (locationFilter !== 'All') {
        filtered = filtered.filter(i => i.location === locationFilter);
    }
    if (searchVal) {
        filtered = filtered.filter(i => i.name.toLowerCase().includes(searchVal));
    }

    if (filtered.length === 0) {
        wrapper.innerHTML = `
                    <div style="text-align:center; padding:60px 24px; color:var(--text-secondary); display:flex; flex-direction:column; align-items:center; gap:16px; width:100%; grid-column: 1 / -1; background:var(--surface); border-radius:var(--radius-lg); border:1px solid var(--border); box-shadow:var(--shadow-1);">
                        <div style="width:72px; height:72px; border-radius:50%; background:var(--surface-2); display:flex; align-items:center; justify-content:center; border: 1.5px solid var(--border); box-shadow:var(--shadow-1);">
                            <i class="fa-solid fa-magnifying-glass" style="font-size:26px; color:var(--primary); opacity:0.85;"></i>
                        </div>
                        <div>
                            <strong style="font-family:var(--font-display); font-size:16px; color:var(--text-primary); display:block;">No matching products found</strong>
                            <span style="font-size:12.5px; color:var(--text-secondary); display:block; margin-top:4px; max-width:280px; margin-left:auto; margin-right:auto; line-height:18px;">Try refining your query search input or resetting category filter logs.</span>
                        </div>
                    </div>
                `;