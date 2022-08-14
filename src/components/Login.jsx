import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import Form from './Form';
import { setUser } from '../store/slices/userSlice';

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handelLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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
  return <Form title="Sign in" handelClick={handelLogin} />;
};

export default Login;
