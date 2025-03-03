import React, { useState } from "react";

const FormExample = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  //Track and update user input which is changed which keeping other field data as it is in form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="Name" 
        value={formData.name} 
        onChange={handleChange} 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={formData.email} 
        onChange={handleChange} 
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormExample;
