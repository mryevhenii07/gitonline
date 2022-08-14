import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import RegisterForm from './RegisterForm/RegisterForm';
import { setUser } from '../../store/slices/userSlice';

const Register = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handelRegister = (email, password) => {
    const auth = getAuth();
    console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        navigate('/');
      })
      .catch(console.error);
  };

  return <RegisterForm handelClick={handelRegister} />;
};

export default Register;
