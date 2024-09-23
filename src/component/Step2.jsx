export default function Step2({ formData, setFormData, nextStep }) {
  const vehicleOptions = ["2", "4"]; // Dummy data for vehicle options

  const handleNext = () => {
    if (!formData.numberOfWheels) {
      alert("Please select the number of wheels."); // Validation alert
    } else {
      nextStep(); // Proceed to next step if validated
    }
  };

  return (
    <div className="container">
      <h3>Number of Wheels</h3>
      <div className="form-group">
        {vehicleOptions.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={formData.numberOfWheels === option}
              onChange={(e) =>
                setFormData({ ...formData, numberOfWheels: e.target.value })
              }
            />
            {option} Wheels
          </label>
        ))}
      </div>
      <button className="btn btn-primary" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
