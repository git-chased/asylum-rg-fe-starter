import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5', // Light gray background
        color: '#333',             // Dark gray text
        textAlign: 'center',
      }}
    >
      <h2 style={{ marginBottom: '20px' }}>Profile</h2>
      <img
        src={picture}
        alt={name}
        style={{
          borderRadius: '50%',      // Makes the image circular
          width: '150px',           // Image size
          height: '150px',          // Image size
          objectFit: 'cover',       // Ensures the image doesn't stretch
          marginBottom: '20px',
        }}
      />
      <h3 style={{ marginBottom: '10px' }}>{name}</h3>
      <p style={{ fontSize: '18px', marginBottom: '5px' }}>{email}</p>
    </div>
  );
};

export default Profile;