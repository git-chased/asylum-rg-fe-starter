import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
     style= {{ 
            color: 'white',
            backgroundColor: 'transparent',
            border: 'none',                 
            outline: 'none',
        }}
      //className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;