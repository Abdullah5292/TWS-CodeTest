
const Item = require('../models/item');
var express = require('express');
var router = express.Router();

// Import the item controller
const itemController = require('../controller/itemcontroller');

// Create a new item
router.post('/', itemController.createItem);
// itemcontroller.createItem is a function that is called when a post request is made to the / route

// Update an item
router.put('/:id', itemController.updateItem);
// itemcontroller.updateItem is a function that is called when a put request is made to the /:id route

// Delete an item
router.delete('/:id', itemController.deleteItem);
// itemcontroller.deleteItem is a function that is called when a delete request is made to the /:id route

// Retrieve all items
router.get('/', itemController.getItems);
// itemcontroller.getItems is a function that is called when a get request is made to the / route

// Retrieve an item by id
router.get('/:id', itemController.getItembyid);
// itemcontroller.getItembyid is a function that is called when a get request is made to the /:id route

module.exports = router;
