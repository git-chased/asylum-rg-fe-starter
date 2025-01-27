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
        backgroundColor: '#f5f5f5', 
        color: '#333',             
        textAlign: 'center',
      }}
    >
      <h2 style={{ marginBottom: '20px' }}>Profile</h2>
      <img
        src={picture}
        alt={name}
        style={{
          borderRadius: '50%',      
          width: '150px',           
          height: '150px',          
          objectFit: 'cover',       
          marginBottom: '20px',
        }}
      />
      <h3 style={{ marginBottom: '10px' }}>{name}</h3>
      <p style={{ fontSize: '18px', marginBottom: '5px' }}>{email}</p>
    </div>
  );
};

export default Profile;