import React, { useState } from 'react';
import './RegisterPage.css';

function RegisterPage() {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    // Add additional profile fields as needed
  });

  const handleProfileUpdate = (event) => {
    event.preventDefault();
    // Update profile logic goes here
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      [name]: value
    }));
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form className="register-form" onSubmit={handleProfileUpdate}>
        <div className="form-group">
          <label>Nickname:</label>
          <input type="text" name="name" value={profileData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Fullname:</label>
          <input type="text" name="fullname" value={profileData.fullname} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>Email:</label>
          <input type="text" name="email" value={profileData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="text" name="password" value={profileData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="text" name="confirmpassword" value={profileData.confirmpassword} onChange={handleChange} required />
        </div>
        
        <button type="submit" className="btn">Create Account</button>
      </form>
    </div>
  );
}

export default RegisterPage;
