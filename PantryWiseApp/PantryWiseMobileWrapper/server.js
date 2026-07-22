const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());

const publicDir = path.join(__dirname, 'public');

// Log every incoming request
app.use((req, res, next) => {
    console.log(`[REQUEST] ${req.method} ${req.url}`);
    next();
});

app.use(express.static(publicDir));

app.use((req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Dedicated PantryWise Dev Server running at http://0.0.0.0:${PORT}`);
});
