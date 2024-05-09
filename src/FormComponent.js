import React, { useState } from "react";
import "./FormComponent.css"; // Import the CSS file

function FormComponent({ closeModal }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    return email.includes("@");
  };

  const validatePhone = (phone) => {
    return phone.length === 10;
  };

  const validateDOB = (dob) => {
    const dobDate = new Date(dob);
    const today = new Date();
    return dobDate < today;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check all fields are filled
    for (const key in formData) {
      if (!formData[key]) {
        alert(`Please fill out the ${key} field.`);
        return;
      }
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    // Validate phone
    if (!validatePhone(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    // Validate date of birth
    if (!validateDOB(formData.dob)) {
      alert("Invalid date of birth. Date of birth cannot be a future date.");
      return;
    }

    // If all validations pass, close the modal
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default FormComponent;
