import { useEffect, useState } from "react";
import Cardetails from "./CarDetails";
import AddCar from "./AddCar";
import '../components/styles/Car.css';

const Car = () => {
    const [carData, setCarData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch("http://localhost:8080/api/v1/all");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                setCarData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getData();
    }, []);

    // Delete Functionality
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/remove/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error("Failed to delete car");
            }
            setCarData((prevData) => prevData.filter((car) => car.id !== id));
        } catch (error) {
            console.error("Failed to delete car:", error);
        }
    };

    // Handle Update
    const handleUpdate = async (id, updatedCar) => {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedCar)
            });
            if (!response.ok) {
                throw new Error("Failed to update car");
            }
            const result = await response.json();
            setCarData((prevData) => prevData.map((car) => (car.id === id ? result : car)));
        } catch (error) {
            console.error("Failed to update car:", error);
        }
    };

    // Handle Car Added
    const handleCarAdded = (newCar) => {
        setCarData((prevData) => [...prevData, newCar]);
    };

    return (
        <div className='car-display'>
            <AddCar onCarAdded={handleCarAdded} />
            {loading ? <p>Loading...</p> : 
                <ul>
                    {carData.map((car) => (
                        <li key={car.id}>
                            <Cardetails carInfo={car} onDelete={handleDelete} onUpdate={handleUpdate} />
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}

export default Car;
