const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Serve static files from the "images" directory
app.use('/', express.static(path.join(__dirname, '../uploads/')));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
