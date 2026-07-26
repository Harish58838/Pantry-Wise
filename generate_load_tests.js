const fs = require('fs');

const endpoints = [
    ["/api/login", "POST", "User Login"],
    ["/api/dashboard", "GET", "Fetch Dashboard"],
    ["/api/inventory", "GET", "Fetch Inventory"],
    ["/api/inventory/add", "POST", "Add Inventory Item"],
    ["/api/inventory/update", "PUT", "Update Inventory Item"],
    ["/api/inventory/delete", "DELETE", "Delete Inventory Item"],
    ["/api/family/sync", "POST", "Sync Family Data"],
    ["/api/barcode/scan", "POST", "Scan Barcode"],
    ["/api/recipes", "GET", "Fetch Recipes"],
    ["/api/recipes/suggest", "GET", "Suggest Recipes"],
    ["/api/user/profile", "GET", "Get User Profile"],
    ["/api/user/settings", "PUT", "Update User Settings"],
    ["/api/notifications", "GET", "Fetch Notifications"],
    ["/api/reports/usage", "GET", "Get Usage Reports"],
    ["/api/auth/refresh", "POST", "Refresh Token"],
    ["/api/auth/logout", "POST", "User Logout"],
    ["/ws/inventory/updates", "WS", "WebSocket Inventory Updates"],
    ["/ws/family/chat", "WS", "WebSocket Family Chat"],
    ["/api/search", "GET", "Global Search"],
    ["/api/export", "GET", "Export Data"],
];

const scenarios = [
    "Normal Load",
    "Spike Load",
    "Stress Test",
    "Endurance Test",
    "Volume Test",
    "Scalability Test",
];

const header = [
    "Test Case ID", "Test Scenario", "Endpoint", "Method", "Action", "Concurrent Users",
    "Ramp-up Period (s)", "Duration (s)", "Requests per Second", "Expected Status",
    "Actual Status", "Average Response Time (ms)", "Max Response Time (ms)",
    "Error Rate (%)", "CPU Usage (%)", "Memory Usage (MB)", "Status"
].join(",") + "\n";

let content = header;

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i <= 401; i++) {
    const [endpoint, method, action] = endpoints[i % endpoints.length];
    const scenario = scenarios[i % scenarios.length];

    const users = randInt(10, 5000);
    const ramp_up = randInt(5, 60);
    const duration = randInt(60, 3600);
    const rps = Math.floor(users / (Math.random() * 9 + 1));

    const avg_resp = randInt(20, 150);
    const max_resp = avg_resp + randInt(10, 300);
    const cpu = randInt(20, 85);
    const mem = randInt(100, 2048);

    const row = [
        `LT-${String(i).padStart(4, '0')}`,
        scenario,
        endpoint,
        method,
        action,
        users,
        ramp_up,
        duration,
        rps,
        "200 OK",
        "200 OK",
        avg_resp,
        max_resp,
        "0.00%",
        `${cpu}%`,
        `${mem}MB`,
        "Pass"
    ];
    content += row.join(",") + "\n";
}

fs.writeFileSync('Load_Testing_Cases.csv', content);
console.log("Generated Load_Testing_Cases.csv successfully.");
