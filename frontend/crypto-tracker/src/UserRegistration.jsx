// UserRegistration.jsx

import React, { useState } from 'react';

function UserRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send POST request to your backend to save user data
    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('User registered successfully!');
        setFormData({ name: '', email: '', phone: '' }); // clear form
      } else {
        const errorData = await response.json();
        alert('Error: ' + errorData.error);
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: '8px', margin: '5px 0', width: '100%' }}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: '8px', margin: '5px 0', width: '100%' }}
        />
      </div>
      <div>
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{ padding: '8px', margin: '5px 0', width: '100%' }}
        />
      </div>
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#00bfa5', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Register
      </button>
    </form>
  );
}

export default UserRegistration;
