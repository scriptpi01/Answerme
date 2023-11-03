import React, { useState } from 'react';
import './ProfilePage.css';

function ProfilePage() {
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
    <div className="profile-container">
      <h1>Profile</h1>
      <form className="profile-form" onSubmit={handleProfileUpdate}>
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
          <label>New Password:</label>
          <input type="text" name="newpassword" value={profileData.newpassword} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Confirm New Password:</label>
          <input type="text" name="confirmnewpassword" value={profileData.confirmnewpassword} onChange={handleChange} required />
        </div>
        
        <button type="submit" className="btn">Update Profile</button>
      </form>
    </div>
  );
}

export default ProfilePage;
