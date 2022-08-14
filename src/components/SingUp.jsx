import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import Form from './Form';
import { setUser } from '../store/slices/userSlice';

const SignUp = () => {
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

  return <Form title="register" handelClick={handelRegister} />;
};

export default SignUp;
