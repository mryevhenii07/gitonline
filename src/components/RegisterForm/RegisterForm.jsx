import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'; //dssd

import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification, ///sddsds
  updateProfile,
} from 'firebase/auth';

import { Link } from 'react-router-dom';

import { setUser } from '../../store/slices/userSlice';
import s from './RegisterForm.module.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { FcGoogle } from 'react-icons/fc';

const Form = () => {
  const [isCheck, setIsCheck] = useState(false);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const toCheckbox = () => {
    setIsCheck(prevState => !prevState);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  const auth = getAuth();
  const onSubmit = async ({ email, password, nickName, checkbox }) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        nickName,
        checkbox,
      )
        .then(({ user }) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
              nickName: user.displayName,
              checkbox,
            }),
          );
          navigate('/');
        })
        .catch(console.error);
    } catch (err) {
      console.log(err);
    }
    await sendEmailVerification(auth.currentUser).catch(err =>
      console.log(err),
    );
    await updateProfile(auth.currentUser, { displayName: nickName }).catch(
      err => console.log(err),
    );

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
              minLength: { value: 6, message: 'Minimum 6 characters' },
              maxLength: { value: 12, message: 'Maximum 12 characters' },
              pattern: {
                value: /^[a-zA-Z0-9@#$%&]{6,12}$/g,
                message: 'Invalid password!',
              },
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
          <Checkbox
            {...label}
            {...register('checkbox')}
            onChange={toCheckbox}
          />
          I have read and agree to the
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
          <Button
            type="submit"
            variant="contained"
            disabled={(!isValid, !isCheck)}
          >
            Sing Up
          </Button>
        </Stack>
        <div className={s.wrapOr}>
          <div className={s.lineOr}></div>OR <div className={s.lineOr}></div>
        </div>
        <button className={s.googleWrap}>
          <FcGoogle />{' '}
          <span className={s.googleText}>Sing in using Google</span>
        </button>
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
