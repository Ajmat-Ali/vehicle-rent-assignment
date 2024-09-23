import { useEffect, useState } from "react";

export default function Step3({ formData, setFormData, nextStep }) {
  const [vehicleTypes, setVehicleTypes] = useState([
    { id: 1, model: "Bike", numberOfWheels: "2" },
    { id: 2, model: "Hatchback", numberOfWheels: "4" },
    { id: 3, model: "SUV", numberOfWheels: "4" },
    { id: 4, model: "Sedan", numberOfWheels: "4" },
  ]); // Dummy vehicle types

  const handleNext = () => {
    if (!formData.vehicleType) {
      alert("Please select a vehicle type."); // Validation alert
    } else {
      nextStep(); // Proceed to next step if validated
    }
  };

  return (
    <div className="container">
      <h3>Type of Vehicle</h3>
      {vehicleTypes
        .filter((type) => type.numberOfWheels === formData.numberOfWheels)
        .map((type) => (
          <label key={type.id}>
            <input
              type="radio"
              value={type.model}
              checked={formData.vehicleType === type.model}
              onChange={(e) =>
                setFormData({ ...formData, vehicleType: e.target.value })
              }
            />
            {type.model}
          </label>
        ))}
      <button className="btn btn-primary" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
