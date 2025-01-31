import { useState } from 'react';
import { addItem } from '../services/itemService';
import { useNavigate } from 'react-router-dom';
import ButtonAppBar from '../components/navbar';

const AddItem = () => {
    const [formData, setFormData] = useState({ // formData is an object that contains the values of the input fields
        name: '',
        description: '',
        quantity: '',
        price: ''
    });
    const navigate = useNavigate(); // useNavigate is a hook that returns a navigate function

    const handleChange = (e) => { // handleChange is a function that is called when the value of an input field changes
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => { // handleSubmit is a function that is called when the form is submitted ie submit button is clicked
        e.preventDefault();
        if (!formData.name || !formData.description || formData.quantity <= 0 || formData.price <= 0) { // Validation for required fields
            alert('All fields are required and quantity & price must be greater than 0.');
            return;
        }
        await addItem(formData);
        navigate('/');
    };

    return (
        <div>
            <ButtonAppBar />
            <div style={{ width: '35%', margin: '0 auto', padding: '20px' }}>
                <h2 style={{ textAlign: 'center' }}>Add New Item</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <input
                        name="name"
                        placeholder="Item Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                            padding: '10px',
                            borderRadius: '4px',
                            border: '1px solid #ddd',
                            fontSize: '16px'
                        }}
                    />
                    <input
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        style={{
                            padding: '10px',
                            borderRadius: '4px',
                            border: '1px solid #ddd',
                            fontSize: '16px'
                        }}
                    />
                    <input
                        name="quantity"
                        type="description"
                        placeholder="Quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                        min="1"
                        style={{
                            padding: '10px',
                            borderRadius: '4px',
                            border: '1px solid #ddd',
                            fontSize: '16px'
                        }}
                    />
                    <input
                        name="price"
                        type="description"
                        placeholder="Price (PKR)"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        min="0.01"
                        step="0.01"
                        style={{
                            padding: '10px',
                            borderRadius: '4px',
                            border: '1px solid #ddd',
                            fontSize: '16px'
                        }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button
                            type="submit"
                            style={{
                                backgroundColor: '#28a745',
                                color: 'white',
                                border: 'none',
                                padding: '10px 30px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                marginTop: '10px'
                            }}
                        >
                            Add Item
                        </button>
                    </div>
                </form>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button
                        onClick={() => navigate('/')}
                        style={{
                            backgroundColor: '#dc3545',
                            color: 'white',
                            border: 'none',
                            padding: '10px 30px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            marginTop: '10px',


                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddItem;
