export default function Step1({ formData, setFormData, nextStep }) {
  const { firstName, lastName } = formData;

  return (
    <div className="container">
      <h3>What is your name?</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          placeholder="First Name"
          required // **Make input required**
        />
        <input
          type="text"
          className="form-control"
          value={lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          placeholder="Last Name"
          required // **Make input required**
        />
      </div>
      <button className="btn btn-primary" onClick={nextStep}>
        Next
      </button>
    </div>
  );
}
