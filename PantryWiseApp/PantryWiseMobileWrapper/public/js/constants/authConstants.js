    if (iotSimulationInterval) clearInterval(iotSimulationInterval);

    const tempEl = document.getElementById('iotSensorTemp');
    if (!tempEl) return;

    // Run thermal physics engine every 1 second
    iotSimulationInterval = setInterval(() => {
        // 1. Thermal Dynamics
        if (iotDoorOpen) {
            // Temperature rises extremely fast if door is open
            iotCurrentTemp += Math.random() * 0.4 + 0.2;
            iotCompressorOn = true; // Compressor maxes out trying to save it
        } else {
            if (iotCurrentTemp > iotTargetTemp + 0.5) {
                // Compressor is ON, cooling down
                iotCompressorOn = true;
                iotCurrentTemp -= Math.random() * 0.3 + 0.1;
            } else if (iotCurrentTemp < iotTargetTemp - 0.5) {
                // Compressor is OFF, warming up naturally
                iotCompressorOn = false;
                iotCurrentTemp += Math.random() * 0.1;
            } else {
                // Deadband holding
                iotCompressorOn = false;
                iotCurrentTemp += (Math.random() * 0.1) - 0.05;
            }
        }

        // 2. Power Draw Calculation
        let currentPower = 10; // Idle draw (lights, sensors)
        if (iotCompressorOn) {
            currentPower = iotDoorOpen ? 180 + (Math.random() * 15) : 120 + (Math.random() * 10);
        }

        // Add noise
        currentPower += Math.random() * 5 - 2.5;
        if (currentPower < 10) currentPower = 10;

        // Update Arrays
        iotPowerHistory.shift();
        iotPowerHistory.push(currentPower);

        // 3. UI Renders
        tempEl.textContent = iotCurrentTemp.toFixed(1) + "°F";
        if (iotDoorOpen) tempEl.style.color = "var(--danger)";
        else tempEl.style.color = "";

        renderIotPowerChart();

    }, 1000);
}

function updateDashboardStatCards() {
    const totalEl = document.getElementById('statTotalItems');
    const expiringEl = document.getElementById('statExpiringItems');
    const shoppingEl = document.getElementById('statShoppingCount');
    const familyEl = document.getElementById('statFamilyCount');

    if (totalEl) totalEl.textContent = pantryItems.length;
    if (expiringEl) expiringEl.textContent = pantryItems.filter(i => i.daysLeft <= 3).length;
    if (shoppingEl) shoppingEl.textContent = shoppingChecklist.filter(i => !i.checked).length;
    if (familyEl) familyEl.textContent = familyMembers.length;
}

function updateWelcomeBanner() {
    const dateEl = document.getElementById('dashboardDateDisplay');
    if (dateEl) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateEl.textContent = now.toLocaleDateString('en-US', options);
    }

    const hour = new Date().getHours();
    let greeting = 'Good morning';
    if (hour >= 12 && hour < 17) greeting = 'Good afternoon';
    else if (hour >= 17) greeting = 'Good evening';

    const bannerH1 = document.querySelector('.welcome-banner h1');
    const signupName = document.getElementById('signupName');
    const userName = signupName?.value || 'Sarah';
    if (bannerH1) bannerH1.textContent = `${greeting}, ${userName} 👋`;

    const bannerP = document.querySelector('.welcome-banner > p');
    const expiring = pantryItems.filter(i => i.daysLeft <= 3).length;
                        <span>${member.name} (Add Inventory)</span>
                        <label class="toggle-switch-ds">
                            <input type="checkbox" ${member.permissions.add ? 'checked' : ''} onchange="toggleFamilyMemberPermissionState('${member.name}', 'add')">
                            <span class="slider-switch-bg"></span>
                        </label>
                    `;
            permissions.appendChild(row);
        }
    });
}
