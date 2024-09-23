import { useEffect, useState } from "react";

export default function Step4({ formData, setFormData, nextStep }) {
  const [models, setModels] = useState([
    { id: 1, name: "Model X" },
    { id: 2, name: "Model Y" },
    { id: 3, name: "Model Z" },
  ]); // Dummy models data

  const handleNext = () => {
    if (!formData.vehicleModel) {
      alert("Please select a specific vehicle model."); // Validation alert
    } else {
      nextStep(); // Proceed to next step if validated
    }
  };

  return (
    <div className="container">
      <h3>Specific Model</h3>
      {models.map((model) => (
        <label key={model.id}>
          <input
            type="radio"
            value={model.name}
            checked={formData.vehicleModel === model.name}
            onChange={(e) =>
              setFormData({ ...formData, vehicleModel: e.target.value })
            }
          />
          {model.name}
        </label>
      ))}
      <button className="btn btn-primary" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
