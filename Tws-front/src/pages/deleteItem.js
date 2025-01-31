import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { deleteItem } from '../services/itemService';
import ButtonAppBar from '../components/navbar';

const DeleteItem = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => { // useEffect is a hook that is called after the component is rendered
        const fetchItem = async () => {
            try {
                const response = await fetch(`http://localhost:5001/api/items/${id}`); // Fetch item by id
                if (!response.ok) throw new Error("Item not found");
                const data = await response.json();
                setItem(data);
            } catch (error) {
                console.error("Error fetching item:", error);
                setItem(null);
            } finally {
                setLoading(false);
            }
        };
        fetchItem();
    }, [id]);

    const handleDelete = async () => { // handleDelete is a function that is called when the delete button is clicked
        try {
            await deleteItem(id);
            navigate('/');
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    if (loading) return <div>Loading...</div>; // If data is loading
    if (!item) return <div>Error: Item not found.</div>; // If item is not found

    return (
        <div style={{ width: '100%' }}>
            <ButtonAppBar />
            <h1 style={{ textAlign: "center", margin: "20px 0" }}>Delete Item</h1>
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Are you sure you want to delete this item?</h2>
                <p><strong>Item Name:</strong> {item.name}</p>
                <p><strong>Price:</strong> {item.price} PKR</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <div>
                    <button
                        onClick={handleDelete}
                        style={{
                            backgroundColor: '#dc3545',
                            color: 'white',
                            border: 'none',
                            padding: '8px 16px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginRight: '10px',
                        }}
                    >
                        Delete
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        style={{
                            backgroundColor: '#6c757d',
                            color: 'white',
                            border: 'none',
                            padding: '8px 16px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteItem;
