import React from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import RegisterForm from './Register';
import FormLogin from './FormLogin/FormLogin';
import { setUser } from '../../store/slices/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handelLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };

  return <FormLogin handelClick={handelLogin} />;
};

export default Login;
