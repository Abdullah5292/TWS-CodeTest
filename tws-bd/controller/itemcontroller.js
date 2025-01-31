const { poolPromise } = require('../utils/db');
const sql = require('mssql');

// Create Item
const createItem = async (req, res) => {
    const { name, description, quantity, price } = req.body;
    try {
        // Get a connection from the pool
        const pool = await poolPromise; //poolpromise is a promise that resolves to a pool object that is used to connect to the database

        // Execute SQL query using the connection
        const result = await pool.request()
            .input('name', sql.VarChar, name) // input is used to bind the values to the query
            .input('description', sql.Text, description)
            .input('quantity', sql.Int, quantity)
            .input('price', sql.Decimal, price)
            .query('INSERT INTO items (name, description, quantity, price) OUTPUT INSERTED.id VALUES (@name, @description, @quantity, @price)');

        // Send back the result to the client
        res.status(201).json({
            id: result.recordset[0].id, //
            name,
            description,
            quantity,
            price
        });
    } catch (err) {
        // Handle any errors
        res.status(500).send(err.message);
    }
};

//update item based on id

const updateItem = async (req, res) => {
    const { id } = req.params;
    const { name, description, quantity, price } = req.body;

    // Validation for required fields
    if (!name || !description || quantity === undefined || price === undefined) {
        return res.status(400).send('Missing required fields');
    }

    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('name', sql.VarChar, name)
            .input('description', sql.Text, description)
            .input('quantity', sql.Int, quantity)
            .input('price', sql.Decimal, price)
            .query('UPDATE items SET name = @name, description = @description, quantity = @quantity, price = @price WHERE id = @id');

        if (result.rowsAffected[0] === 0) {
            return res.status(404).send('Item not found');
        }

        res.json({
            id,
            name,
            description,
            quantity,
            price
        });
    } catch (err) {
        console.error('Error updating item:', err); // Adding more context to the error logs
        res.status(500).send('Internal server error');
    }
}

//Retrieving the list of items

const getItems = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .query('SELECT * FROM items'); // query is used to execute the query

        res.json(result.recordset); // recordset is used to get the result of the query
    } catch (err) {
        console.error(err)
        res.status(500).send(err.message);
    }
}
//get item based on id
const getItembyid = async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('SELECT * FROM items WHERE id = @id');

        if (result.recordset.length === 0) {
            return res.status(404).send('Item not found');
        }

        res.json(result.recordset[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
}


//delete item based on id

const deleteItem = async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM items WHERE id = @id');

        if (result.rowsAffected[0] === 0) {
            return res.status(404).send('Item not found');
        }

        res.json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = { // Exporting the functions
    createItem,
    updateItem,
    getItems,
    deleteItem,
    getItembyid
};