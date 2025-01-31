import axios from 'axios';

const API_URL = 'http://localhost:5001/api/items'; // API URL

export const getItems = async () => { // Function to get all items
    const response = await axios.get(API_URL); //axios is used to make HTTP requests to the server
    return response.data;
};

export const addItem = async (itemData) => {
    const response = await axios.post(API_URL, itemData); //post is used to add a new item
    return response.data;
};

export const updateItem = async (id, updatedItem) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedItem); //put is used to update an existing item
    return response.data;
};

export const deleteItem = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`); //delete is used to delete an item
    return response.data;
}
export const getItemById = async (id) => {
    const response = await fetch(`/api/items/${id}`); // Fetch item by id
    if (!response.ok) {
        throw new Error('Item not found'); // Throw an error if item is not found
    }
    return await response.json();
};