import { useState, useEffect } from 'react';
import { getItems } from '../services/itemService';
import ButtonAppBar from '../components/navbar';
import { useNavigate } from 'react-router-dom';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getItems().then(setItems); // Fetch all items and set the items state
    }, []);

    const handleEdit = (id) => {
        navigate(`/update/${id}`) // Navigate to the update item page
    };

    const addItem = () => {
        navigate('/add'); // Navigate to the add item page
    };

    const deleteItem = (id) => {
        navigate(`/delete/${id}`); // Navigate to the delete item page
    };

    return (
        <div>
            <ButtonAppBar />
            <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Item List</h1>

                {/* Table Container */}
                <div style={{ width: '80%', overflowX: 'auto', marginTop: '20px' }}>
                    {/* Table Header */}
                    <div style={{ display: 'flex', backgroundColor: '#f4f4f4', padding: '12px', fontWeight: 'bold', borderBottom: '1.5px solid #ddd' }}>
                        <div style={{ flex: 2, padding: '8px' }}>Item Name</div>
                        <div style={{ flex: 1, padding: '8px' }}>Price (PKR)</div>
                        <div style={{ flex: 2, padding: '8px', textAlign: 'center' }}>Actions</div>
                    </div>

                    {/* Table Rows */}
                    {items.map(item => (
                        <div key={item._id} style={{ display: 'flex', padding: '12px', borderBottom: '1px solid #ddd', alignItems: 'center' }}>
                            <div style={{ flex: 2, padding: '8px' }}>{item.name}</div>
                            <div style={{ flex: 1, padding: '8px' }}>{item.price} PKR</div>
                            <div style={{ flex: 2, padding: '8px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                                <button
                                    onClick={() => handleEdit(item.id)}
                                    style={{
                                        backgroundColor: '#007bff', color: 'white', border: 'none',
                                        padding: '8px 20px', borderRadius: '4px', cursor: 'pointer'
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteItem(item.id)}
                                    style={{
                                        backgroundColor: '#dc3545', color: 'white', border: 'none',
                                        padding: '8px 20px', borderRadius: '4px', cursor: 'pointer'
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add Item Button */}
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <button
                        onClick={addItem}
                        style={{
                            backgroundColor: '#28a745', color: 'white', border: 'none',
                            padding: '10px 60px', borderRadius: '4px', cursor: 'pointer'
                        }}
                    >
                        Add Item
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemList;
