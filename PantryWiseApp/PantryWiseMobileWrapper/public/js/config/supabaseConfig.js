
    function frameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, index) => {
            p.x += p.vx; p.y += p.vy;
            p.vy += 0.2; // gravity
            p.alpha -= 0.02;
            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
            ctx.restore();
            if (p.alpha <= 0) particles.splice(index, 1);
        });

        if (particles.length > 0) requestAnimationFrame(frameLoop);
    }
    frameLoop();
}

// ==========================================================================
// PREMIUM DATA CHARTS INITIALIZATIONS
// ==========================================================================
let instancesOfCharts = {};

function initializeChartVisualizations() {
    const isDark = document.body.classList.contains('dark');
    const textClr = isDark ? '#94A3B8' : '#475569';
    const gridClr = isDark ? '#334155' : '#E2E8F0';

    // Clean up to avoid garbage rendering leaks
    Object.values(instancesOfCharts).forEach(c => c.destroy());

    // 1. Dashboard Line Chart
    const ctxLine = document.getElementById('dashboardWeeklyLineCanvas')?.getContext('2d');
    if (ctxLine) {
        instancesOfCharts.line = new Chart(ctxLine, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    { label: 'Consumed (kg)', data: [1.8, 2.4, 2.0, 3.2, 2.5, 4.0, 2.8], borderColor: '#10B981', fill: false, tension: 0.4 },
                    { label: 'Wasted (kg)', data: [0.2, 0.4, 0.1, 0.8, 0.2, 0.9, 0.3], borderColor: '#EF4444', fill: false, tension: 0.4 }
                ]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { labels: { color: textClr } } },
                scales: {
                    x: { grid: { color: gridClr }, ticks: { color: textClr } },
                    y: { grid: { color: gridClr }, ticks: { color: textClr } }
                }
            }
        });
    }

    // 2. Insights Spend Pie Chart
    const ctxPie = document.getElementById('chartCategorySpendCanvas')?.getContext('2d');
    if (ctxPie) {
        instancesOfCharts.pie = new Chart(ctxPie, {
            type: 'pie',
            data: {
                labels: ['Dairy 🥛', 'Fruits 🍎', 'Bakery 🍞', 'Veggies 🥦'],
                datasets: [{
                    data: [42, 28, 18, 12],
                    backgroundColor: ['#10B981', '#F59E0B', '#3B82F6', '#EF4444']
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom', labels: { color: textClr } } }
            }
        });
    }

    // 3. Sustainability Donut Chart
    const ctxDonut = document.getElementById('chartSustainabilityCanvas')?.getContext('2d');
    if (ctxDonut) {
        instancesOfCharts.donut = new Chart(ctxDonut, {
            type: 'doughnut',
            data: {
                labels: ['Consumed ✅', 'Wasted 🗑️'],
                datasets: [{
                    data: [82, 18],
                    backgroundColor: ['#10B981', '#EF4444'],
                    borderWidth: 2, borderColor: isDark ? '#1E293B' : '#FFFFFF'
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom', labels: { color: textClr } } }
            }
        });
    }
}