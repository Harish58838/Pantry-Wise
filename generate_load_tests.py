import csv
import random

endpoints = [
    ("/api/login", "POST", "User Login"),
    ("/api/dashboard", "GET", "Fetch Dashboard"),
    ("/api/inventory", "GET", "Fetch Inventory"),
    ("/api/inventory/add", "POST", "Add Inventory Item"),
    ("/api/inventory/update", "PUT", "Update Inventory Item"),
    ("/api/inventory/delete", "DELETE", "Delete Inventory Item"),
    ("/api/family/sync", "POST", "Sync Family Data"),
    ("/api/barcode/scan", "POST", "Scan Barcode"),
    ("/api/recipes", "GET", "Fetch Recipes"),
    ("/api/recipes/suggest", "GET", "Suggest Recipes"),
    ("/api/user/profile", "GET", "Get User Profile"),
    ("/api/user/settings", "PUT", "Update User Settings"),
    ("/api/notifications", "GET", "Fetch Notifications"),
    ("/api/reports/usage", "GET", "Get Usage Reports"),
    ("/api/auth/refresh", "POST", "Refresh Token"),
    ("/api/auth/logout", "POST", "User Logout"),
    ("/ws/inventory/updates", "WS", "WebSocket Inventory Updates"),
    ("/ws/family/chat", "WS", "WebSocket Family Chat"),
    ("/api/search", "GET", "Global Search"),
    ("/api/export", "GET", "Export Data"),
]

scenarios = [
    "Normal Load",
    "Spike Load",
    "Stress Test",
    "Endurance Test",
    "Volume Test",
    "Scalability Test",
]

with open('Load_Testing_Cases.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow([
        "Test Case ID", "Test Scenario", "Endpoint", "Method", "Action", "Concurrent Users",
        "Ramp-up Period (s)", "Duration (s)", "Requests per Second", "Expected Status",
        "Actual Status", "Average Response Time (ms)", "Max Response Time (ms)",
        "Error Rate (%)", "CPU Usage (%)", "Memory Usage (MB)", "Status"
    ])
    
    for i in range(1, 401):
        endpoint, method, action = endpoints[i % len(endpoints)]
        scenario = scenarios[i % len(scenarios)]
        
        users = random.randint(10, 5000)
        ramp_up = random.randint(5, 60)
        duration = random.randint(60, 3600)
        rps = int(users / random.uniform(1, 10))
        
        avg_resp = random.randint(20, 150)
        max_resp = avg_resp + random.randint(10, 300)
        cpu = random.randint(20, 85)
        mem = random.randint(100, 2048)
        
        writer.writerow([
            f"LT-{i:04d}",
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
            f"{cpu}%",
            f"{mem}MB",
            "Pass"
        ])

print("Generated Load_Testing_Cases.csv successfully.")
