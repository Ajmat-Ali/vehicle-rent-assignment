# vehicle-rent-assignment

## Vehicle Rental Form App

This is a multi-step vehicle rental form application built with React and styled using Bootstrap. The app collects user and vehicle data, presents one question per screen, and ensures validation before proceeding to the next question.

## Table of Contents

Installation
Features
Usage
Folder Structure
Customization
Contributing
License
Installation
Clone the repository:

# Copy code

git clone https://github.com/your-username/vehicle-rental-form-app.git
cd vehicle-rental-form-app
Install dependencies:

# npm install

Start the development server:

# npm start

The application will run at: http://localhost:3000/

# Features

Multi-step form for collecting user and vehicle data.
Bootstrap for responsive and consistent styling.
Form validation for required fields.
Dynamic data rendering based on user inputs.
Modular structure for easy maintenance and extension.
Usage
Multi-Step Form:

Navigate through each step by filling in the required fields.
Form validation ensures the user completes each step before moving to the next.
Depending on the vehicle type (e.g., two-wheeler, four-wheeler), different questions may be displayed.
Bootstrap Integration:

Bootstrap is integrated for a mobile-friendly, responsive UI.
You can easily customize the Bootstrap styles or use pre-built components like buttons, forms, and grids.

# Folder Structure

vehicle-rental-form-app/
├── node_modules/
├── public/
├── src/
│ ├── components/
│ │ ├── MultiStepForm.jsx # Main form component handling multi-step logic
│ │ ├── StepOne.jsx # Component for Step 1 (User details)
│ │ ├── StepTwo.jsx # Component for Step 2 (Vehicle type details)
│ │ ├── StepThree.jsx # Component for Step 3 (Review and submit)
│ ├── App.jsx # Main App component
│ ├── index.js # Entry point for React app
│ ├── custom.css # Custom styles for overriding Bootstrap
├── README.md # Project documentation
└── package.json # Project dependencies

# Key Components:

MultiStepForm.jsx: Manages form state, navigation between steps, and validation logic.
StepOne.jsx: Collects user information (name, email, etc.).
StepTwo.jsx: Collects vehicle details (e.g., vehicle type, model).
StepThree.jsx: Final review of entered data before submission.
Bootstrap Integration
Bootstrap has been imported globally in the index.js file to provide consistent styling across the app. You can use Bootstrap classes in any component like:
