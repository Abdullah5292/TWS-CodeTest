import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ButtonAppBar from "../components/navbar";
import { updateItem } from "../services/itemService";

const UpdateItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null); // item is an object that contains the details of the item
    const [updatedItem, setUpdatedItem] = useState({
        name: "",
        price: "",
        quantity: "",
        description: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`http://localhost:5001/api/items/${id}`);
                if (!response.ok) throw new Error("Item not found");
                const data = await response.json();
                setItem(data);
                setUpdatedItem({
                    name: data.name,
                    price: data.price,
                    quantity: data.quantity,
                    description: data.description,
                });
            } catch (error) {
                console.error("Error fetching item:", error);
                setItem(null);
            }
        };
        fetchItem();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedItem((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateItem(id, updatedItem);
            navigate("/"); // Redirect back to the item list
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };

    if (!item) return <div>Loading...</div>;

    return (
        <div>
            <ButtonAppBar />
            <h1 style={{ textAlign: "center", margin: "20px 0" }}>Update Item</h1>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        width: "350px",
                        backgroundColor: "#fff",
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label>Item Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={updatedItem.name}
                            onChange={handleChange}
                            required
                            style={{
                                padding: "8px",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                            }}
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label>Price (PKR):</label>
                        <input
                            type="text"
                            name="price"
                            value={updatedItem.price}
                            onChange={handleChange}
                            required
                            style={{
                                padding: "8px",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                            }}
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label>Quantity:</label>
                        <input
                            type="text"
                            name="quantity"
                            value={updatedItem.quantity}
                            onChange={handleChange}
                            required
                            style={{
                                padding: "8px",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                            }}
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label>Description:</label>
                        <textarea
                            name="description"
                            value={updatedItem.description}
                            onChange={handleChange}
                            required
                            style={{
                                padding: "8px",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                                resize: "vertical",
                                minHeight: "60px",
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            backgroundColor: "#007bff",
                            color: "white",
                            border: "none",
                            padding: "10px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontSize: "16px",

                        }}
                    >
                        Update Item
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
                            fontSize: "16px",
                        }}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;
