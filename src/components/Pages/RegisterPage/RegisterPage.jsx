import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <h2>Register</h2>

      <p>
        Already have an account? <Link to="/login">Sing in</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
