            });
            showSystemToast("OCR bill Scan complete", "Strawberries added from receipt logs checkout");
            logUserAction('ocr_scanned', { item: 'Fresh Strawberries Box', method: 'receipt' });
        } else {
            pantryItems.unshift({
                id: Date.now(),
                name: "Greek Style Yogurt",
                category: "Dairy",
                quantity: 1,
                unit: "pcs",
                expiry: "2026-05-28",
                daysLeft: 7,
                status: "success",
                image: "🥛",
                location: "Fridge"
            });
            showSystemToast("Barcode Scan Success", "Greek Style Yogurt added from cloud dictionary.");
            logUserAction('barcode_scanned', { item: 'Greek Style Yogurt', method: 'barcode' });
        }

        reloadAppUIRenderers();
        fireCelebrationConfettiLoop();
    }, 1200);
}

// ==========================================================================
// SETTINGS & FAQ CHATBOT COMMAND LINE INTERPRETER
// ==========================================================================
function runSimulatedCloudBackup() {
    showSystemToast("Cloud Synchronizer", "Writing data backup sync arrays...");
    let progress = 0;
// Initialize Supabase Client lazily (SDK loads with defer, so it may not be ready at script parse time)
const supabaseUrl = 'https://yupxgfgntbhihnzehhnv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1cHhnZmdudGJoaWhuemVoaG52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwMzU5MzEsImV4cCI6MjA5NTYxMTkzMX0.4lmWW2VWb7Tyn6UQ0w2rM0OLKLKKO1pOIJ3m98NIT_s';
let _supabaseClient = null;
function getSupabase() {
    if (_supabaseClient) return _supabaseClient;
    try {
        if (window.supabase && window.supabase.createClient) {
            _supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
            return _supabaseClient;
        }
    } catch (e) {
        console.error('Supabase init failed:', e);
    }
    return null;
}

// ==========================================================================
// WAVE 3 COMMAND PALETTE & KEYBOARD SHORTCUTS
// ==========================================================================
function openCommandPalette() {
    const overlay = document.getElementById('commandPaletteOverlay');
    overlay.classList.add('active');
    setTimeout(() => document.getElementById('cmdPaletteInput').focus(), 100);
}

function closeCommandPalette(e) {
    if (e && e.target !== document.getElementById('commandPaletteOverlay') && e.type === 'click') return;
    document.getElementById('commandPaletteOverlay').classList.remove('active');
    document.getElementById('cmdPaletteInput').value = ''; // Reset input
}

function executeCommandSearch(e) {
    if (e.key === 'Escape') {
        closeCommandPalette();
        return;
    }
    if (e.key === 'Enter') {
        const val = e.target.value.toLowerCase();
        if (val.includes('add') || val.includes('new')) {
            closeCommandPalette();
            openAddPantryItemModal();
        } else if (val.includes('shop') || val.includes('list')) {
            closeCommandPalette();
            routeToView('shopping');
        } else if (val.includes('pantry') || val.includes('inventory')) {
            closeCommandPalette();
            routeToView('pantry');
        } else if (val.includes('ai') || val.includes('bot')) {
            closeCommandPalette();
            routeToView('settings');
            setTimeout(() => document.getElementById('pantryBotCmdInput').focus(), 300);
        }
    }
}

// Global Keyboard Shortcut Listener
window.addEventListener('keydown', (e) => {
    // Cmd+K or Ctrl+K to open palette
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openCommandPalette();
    }
    // Escape to close palette