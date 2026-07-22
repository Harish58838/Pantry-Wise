
function performSystemLogout() {
    if (!confirm("Are you sure you want to log out of PantryWise?")) return;

    showSystemToast("Signed Out", "You have successfully signed out of your session.");

    // Clear current user from session memory
    currentUserId = null;
    pantryItems = [];
    shoppingChecklist = [];
    familyMembers = [];

    // Reveal auth view overlay
    const authView = document.getElementById('appAuthView');
    authView.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Hide browser scrollbars in onboarding screen

    // Redirect session to welcome slide (stage 4)
    document.querySelectorAll('.auth-slider-stage').forEach(stage => stage.classList.remove('active-stage'));
    document.getElementById('authStage-4').classList.add('active-stage');
}

// Auto initialize on load uploader
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('splashProgressIndicator');
    let progress = 0;
    const interval = setInterval(() => {
        progress += 4;
        if (progressBar) progressBar.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(interval);
            const splashOverlay = document.getElementById('appSplashScreenOverlay');
            if (splashOverlay) {
                splashOverlay.style.opacity = '0';
                setTimeout(() => {
                    splashOverlay.style.display = 'none';
                }, 500);
            }
        }
    }, 40); // 1-second splash animation
});
        btn.style.borderColor = "";
        if (statusEl) statusEl.textContent = "Closed";
        if (lightEl) lightEl.style.opacity = "0";
        if (camBadge) { camBadge.className = "app-badge app-badge-success"; camBadge.innerText = "Camera Online"; }
        showSystemToast("Door Closed", "Secured. Compressor stabilizing temp.");
        logActivity("fa-solid fa-door-closed", "success", "<strong>User</strong> closed the fridge door.");
    }
}

function setNewFridgeTargetTemp(val) {
    iotTargetTemp = parseFloat(val);
    logActivity("fa-solid fa-temperature-arrow-down", "info", `<strong>User</strong> changed target temp to ${val}°F`);
}

function renderIotPowerChart() {
    const canvas = document.getElementById('chartIotPowerCanvas');
    if (!canvas) return;

    // If chart exists, just update data, otherwise init
    if (!instancesOfCharts.iotPower) {
        const isDark = document.body.classList.contains('dark');
        instancesOfCharts.iotPower = new Chart(canvas.getContext('2d'), {
            type: 'line',
            data: {
                labels: Array(60).fill(''),
                datasets: [{
                    label: 'Power Draw (W)',
                    data: iotPowerHistory,
                    borderColor: '#3B82F6',
                    backgroundColor: 'rgba(59, 130, 246, 0.15)',
                    fill: true,
                    tension: 0.1,
                    pointRadius: 0,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                animation: { duration: 0 },
                scales: {
                    x: { display: false },
                    y: { min: 0, max: 200, grid: { color: isDark ? '#334155' : '#E2E8F0' }, ticks: { color: isDark ? '#94A3B8' : '#475569' } }
                },
                plugins: { legend: { display: false } }
            }
        });
    } else {
        instancesOfCharts.iotPower.data.datasets[0].data = iotPowerHistory;
        instancesOfCharts.iotPower.update();
    }
}

function simulateIoTSensors() {