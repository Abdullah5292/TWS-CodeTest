
// Import required libraries
const express = require('express');
const cors = require('cors');
const { poolPromise } = require('./utils/db'); // MSSQL connection pool
const itemRoutes = require('./routes/item');


// Initialize the Express app
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(express.json()); // To parse JSON data in request body

// API routes
app.use('/api/items', itemRoutes);


// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the ERP Management System!');
});

// Check database connection on server startup
app.listen(5001, async () => { // Start the server on port 5001
    try {
        const pool = await poolPromise;
        console.log('Connected to MSSQL Database');
        console.log('Server is running on port 5001');
    } catch (err) {
        console.error('Database connection failed:', err.message);
    }
});

module.exports = app;

