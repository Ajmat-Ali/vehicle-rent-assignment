import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Step5({ formData, setFormData }) {
  const [startDate, setStartDate] = useState(formData.dateRange.start);
  const [endDate, setEndDate] = useState(formData.dateRange.end);

  const handleNext = () => {
    setFormData({
      ...formData,
      dateRange: { start: startDate, end: endDate },
    });
    // You can proceed to final step or form submission here.
  };

  function handleSubmit() {
    alert("Thank you we will reach to you very soon");
  }

  return (
    <div className="container">
      <form action="#" onSubmit={handleSubmit}>
        <h3>Select Rental Date Range</h3>
        <div className="form-group">
          <label>Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="End Date"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" onClick={handleNext}>
          Submit
        </button>
      </form>
    </div>
  );
}
