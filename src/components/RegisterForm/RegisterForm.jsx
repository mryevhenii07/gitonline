// import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

import { setUser } from '../../store/slices/userSlice';
import s from './RegisterForm.module.css';

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Checkbox from '@mui/material/Checkbox';

const Form = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ email, password }) => {
    const auth = getAuth();
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

  // console.log(watch('example'));

  return (
    // <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
    <Box
      onSubmit={handleSubmit(onSubmit)}
      className={s.form}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1 className={s.title}>Registration</h1>
      <div>
        <TextField
          {...register('email', { required: true })}
          type="text"
          id="standard-helperText"
          label="Email"
          // defaultValue="Default Value"
          // helperText="Some important text"
          variant="standard"
        />
        <TextField
          {...register('password', { required: true })}
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </div>
      <div className={s.wrapCheckButtonReg}>
        <div className={s.checkbox}>
          <Checkbox {...label} />I have read and agree to the
          <span className={s.checkboxSpan}>
            <a href="#" className={s.formLink}>
              {' '}
              privacy police
            </a>
          </span>
          ,
          <span className={s.checkboxSpan}>
            <a href="#" className={s.formLink}>
              terms of servise.
            </a>
          </span>
        </div>

        <Stack spacing={2} direction="row" className={s.wrapBtn}>
          <Button type="submit" variant="contained">
            Sing Up
          </Button>
        </Stack>
        <p className={s.wrapLinkRegister}>
          I have an account{' '}
          <Link className={s.registerLink} to="/login">
            Login
          </Link>
        </p>
      </div>
    </Box>
  );
};
export default Form;
