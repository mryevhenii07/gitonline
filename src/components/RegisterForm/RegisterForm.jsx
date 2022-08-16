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
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });
  const onSubmit = ({ email, password, nickName }) => {
    console.log(nickName);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password, nickName)
      .then(({ user }) => {
        console.log(user);
        console.log(nickName);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            nickName: nickName,
          }),
        );
        navigate('/');
      })
      .catch(console.error);
    reset();
  };

  return (
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
        <label htmlFor="">
          <TextField
            {...register('nickName', {
              required: 'Required field',
              minLength: { value: 3, message: 'Minimum 3 characters' },
              maxLength: { value: 10, message: 'Maximum 10 characters' },
            })}
            type="text"
            id="standard-helperTexts"
            label="NickName"
            variant="standard"
          />
          <div className={s.wrapError}>
            {errors?.nickName && (
              <p className={s.error}>{errors?.nickName?.message || 'Error!'}</p>
            )}
          </div>
        </label>
        <label htmlFor="">
          <TextField
            {...register('email', {
              required: 'Required field',
              minLength: { value: 7, message: ' Minimum 7 characters' },
              maxLength: { value: 26, message: 'Maximum 26 characters' },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            type="text"
            id="standard-helperText"
            label="Email"
            variant="standard"
          />
          <div className={s.wrapError}>
            {errors?.email && (
              <p className={s.error}>{errors?.email?.message || 'Error!'}</p>
            )}
          </div>
        </label>
        <label htmlFor="">
          <TextField
            {...register('password', {
              required: 'Required field',
              minLength: { value: 5, message: 'Minimum 5 characters' },
              maxLength: { value: 20, message: 'Maximum 20 characters' },
            })}
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          <div className={s.wrapError}>
            {errors?.password && (
              <p className={s.error}>{errors?.password?.message || 'Error!'}</p>
            )}
          </div>
        </label>
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
          <Button type="submit" variant="contained" disabled={!isValid}>
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
