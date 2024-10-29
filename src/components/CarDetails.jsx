import { useState } from 'react';
import '../components/styles/CarDetails.css';
import EditCar from './EditCar';

const Cardetails = ({ carInfo, onDelete, onUpdate }) => {
    const { id, make, model, color, registrationNumber, year, price, owner } = carInfo;
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = (updatedCar) => {
        onUpdate(id, updatedCar);
        setIsEditing(false);
    };

    return (
        <>
            {isEditing ? (
                <EditCar
                    carInformation={carInfo}
                    onSave={handleSave}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <div className="car-info">
                    <p><strong>Id: </strong>{id}</p>
                    <p><strong>Make: </strong>{make}</p>
                    <p><strong>Model: </strong>{model}</p>
                    <p><strong>Color: </strong>{color}</p>
                    <p><strong>Registration Number: </strong>{registrationNumber}</p>
                    <p><strong>Year: </strong>{year}</p>
                    <p><strong>Price: </strong>{price}</p>
                    <p><strong>Owner: </strong>
                        {owner ? `${owner.firstName} ${owner.lastName}` : 'No owner information available'}
                    </p>
                    <button className="update-btn" onClick={() => setIsEditing(true)}>Update</button>
                    <button className="del-btn" onClick={() => onDelete(id)}>Delete</button>
                </div>
            )}
        </>
    );
}

export default Cardetails;
