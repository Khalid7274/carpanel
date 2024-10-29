import { useState } from "react";
import '../components/styles/AddCar.css';

const AddCar = ({ onCarAdded }) => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [regNumber, setRegNumber] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        const car = { make, model, color, regNumber, year, price };

        try {
            const response = await fetch("http://localhost:8080/api/v1/create", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(car)
            });

            if (!response.ok) {
                throw new Error("Failed to add car");
            }

            const newCar = await response.json();
            onCarAdded(newCar);

            // Reset form fields
            setMake('');
            setModel('');
            setColor('');
            setRegNumber('');
            setYear('');
            setPrice('');
        } catch (error) {
            console.error("Error adding car: ", error); // Corrected console.Error to console.error
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
        <h2>Add New car Here</h2>
            <div>
                <label>Make:</label>
                <input
                    type="text"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Model:</label>
                <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Color:</label>
                <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Reg. Number:</label> {/* Corrected label text */}
                <input
                    type="text"
                    value={regNumber}
                    onChange={(e) => setRegNumber(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Year:</label>
                <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Car</button>
        </form>
        </>
    );
};

export default AddCar;
