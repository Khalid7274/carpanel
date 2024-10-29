import { useState } from 'react';
import '../components/styles/EditCar.css';

const EditCar = ({ carInformation, onSave, onCancel }) => {
    const { id, make, model, color, registrationNumber, year, price } = carInformation;
    const [updateMake, setUpdateMake] = useState(make);
    const [updateModel, setUpdateModel] = useState(model);
    const [updateColor, setUpdateColor] = useState(color);
    const [updateRegNumber, setUpdateRegNumber] = useState(registrationNumber);
    const [updateYear, setUpdateYear] = useState(year);
    const [updatePrice, setUpdatePrice] = useState(price);

    const handleSave = () => {
        const updatedCar = {
            ...carInformation,
            make: updateMake,
            model: updateModel,
            color: updateColor,
            registrationNumber: updateRegNumber,
            year: updateYear,
            price: updatePrice,
        };
        onSave(updatedCar);
    };

    return (
        <div className='edit-car'>
            <p><strong>Id: </strong>{id}</p>
            <label>Make:</label>
            <input
                type="text"
                value={updateMake}
                onChange={(e) => setUpdateMake(e.target.value)}
            />
            <label>Model:</label>
            <input
                type="text"
                value={updateModel}
                onChange={(e) => setUpdateModel(e.target.value)}
            />
            <label>Color:</label>
            <input
                type="text"
                value={updateColor}
                onChange={(e) => setUpdateColor(e.target.value)}
            />
            <label>Registration Number:</label>
            <input
                type="text"
                value={updateRegNumber}
                onChange={(e) => setUpdateRegNumber(e.target.value)}
            />
            <label>Year:</label>
            <input
                type="text"
                value={updateYear}
                onChange={(e) => setUpdateYear(e.target.value)}
            />
            <label>Price:</label>
            <input
                type="text"
                value={updatePrice}
                onChange={(e) => setUpdatePrice(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
};

export default EditCar;
