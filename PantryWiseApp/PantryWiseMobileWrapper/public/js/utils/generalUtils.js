                name: name,
                category: "Dairy",
                quantity: qty,
                unit: "pcs",
                expiry: "2026-05-30",
                daysLeft: 9,
                status: "success",
                image: "🥦",
                location: "Fridge"
            });
            reloadAppUIRenderers();
            fireCelebrationConfettiLoop();
            chat.innerHTML += `<div><strong style="color:var(--primary);">PantryBot:</strong> Processed! I added **${qty} ${name}** to your Fridge shelf.</div>`;
        } else if (query.includes('add') && query.includes('shopping')) {
            const name = query.replace('add', '').replace('to shopping', '').replace('list', '').trim();
            const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
            shoppingChecklist.unshift({
                id: Date.now(),
                name: formattedName,
                quantity: 1,
                unit: "pack",
                checked: false,
                store: "Walmart",
                assigned: "Sarah"
            });
            reloadAppUIRenderers();
            fireCelebrationConfettiLoop();
            chat.innerHTML += `<div><strong style="color:var(--primary);">PantryBot:</strong> Processed! I added **${formattedName}** to your Shared Shopping Checklist.</div>`;
        } else if (query.includes('expir') || query.includes('what is expiring')) {
            const expiring = pantryItems.filter(i => i.daysLeft <= 3);
            if (expiring.length > 0) {
                const names = expiring.map(i => `${i.image} ${i.name} (${i.daysLeft}d left)`).join(', ');
                chat.innerHTML += `<div><strong style="color:var(--primary);">PantryBot:</strong> Found **${expiring.length}** expiring items: ${names}. Recommend cooking today!</div>`;
            } else {
                chat.innerHTML += `<div><strong style="color:var(--primary);">PantryBot:</strong> All clear! No items are expiring soon in your databases.</div>`;
            }
        } else if (query.includes('how to configure ocr')) {
            chat.innerHTML += `<div><strong style="color:var(--primary);">PantryBot:</strong> Tap OCR Scan in Pantry filters, take photo checkouts to parse date expiries instantly!</div>`;
        } else if (query.includes('family sharing permissions')) {
            chat.innerHTML += `<div><strong style="color:var(--primary);">PantryBot:</strong> Household admins can edit individual Viewers or Editors checklists limits in the Family Sync hub.</div>`;
        } else {
            chat.innerHTML += `<div><strong style="color:var(--primary);">PantryBot:</strong> Parsed command! You can type: *"add 2 Apples to pantry"* or *"what is expiring?"* for dynamic automation!</div>`;
        }
        chat.scrollTop = chat.scrollHeight;
    }, 500);
}

// ==========================================================================
// APPEARANCES & CELEBRATIONS EFFECTS
// ==========================================================================
function toggleGlobalAppearanceTheme() {
    const isDark = document.body.classList.toggle('dark');
    document.getElementById('settingsDarkModeToggle').checked = isDark;
    initializeChartVisualizations();
}

function showSystemToast(title, desc) {
    const toast = document.getElementById('systemToast');
    document.getElementById('toastTitle').innerText = title;
    document.getElementById('toastDesc').innerText = desc;
    toast.style.display = 'flex';
    setTimeout(() => { toast.style.display = 'none'; }, 2500);
}

function fireCelebrationConfettiLoop() {
    const canvas = document.getElementById('confetti-celebrate-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 40; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            vx: (Math.random() - 0.5) * 10,
            vy: (Math.random() - 0.5) * 10 - 4,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            size: Math.random() * 6 + 4,
            alpha: 1
        });
    }
