import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    numberOfWheels: "",
    vehicleType: "",
    vehicleModel: "",
    dateRange: { start: "", end: "" },
  });

  const nextStep = () => {
    if (validateStep(step)) {
      if (step < 5) setStep(step + 1);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName; // **Check for name input**
      case 2:
        return formData.numberOfWheels; // **Check for number of wheels selection**
      case 3:
        return formData.vehicleType; // **Check for vehicle type selection**
      case 4:
        return formData.vehicleModel; // **Check for vehicle model selection**
      case 5:
        return formData.dateRange.start && formData.dateRange.end; // **Check for date range**
      default:
        return false;
    }
  };

  switch (step) {
    case 1:
      return (
        <Step1
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 2:
      return (
        <Step2
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Step3
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <Step4
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 5:
      return <Step5 formData={formData} setFormData={setFormData} />;
    default:
      return <Step1 />;
  }
}
