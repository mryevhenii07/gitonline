import * as React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import Notiflix from 'notiflix';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { FcGoogle } from 'react-icons/fc';

import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { setUser } from '../../store/slices/userSlice';
import { useAuth } from '../../hooks/use-auth';

import s from './LoginForm.module.css';

import { auth } from '../../firebase';

const Form = () => {
  const [isCheck, setIsCheck] = useState(false);

  const { push } = useHistory();
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

  let isAuth = useAuth();

  const onSubmit = ({ email, password, checkbox }) => {
    const auth = getAuth();

    if (!isAuth) {
      Notiflix.Notify.warning('You entered an incorrect email or password'); ///???
    }

    signInWithEmailAndPassword(auth, email, password, checkbox)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            checkbox,
          }),
        );
        push('/');
      })
      .catch(console.error);

    reset();
  };

  const provider = new GoogleAuthProvider();
  const singInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            profilePic: user.photoURL,
          }),
        );
        console.log(auth);
        push('/');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className={s.position}>
      {' '}
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
        <h1 className={s.title}>Login</h1>
        <div>
          <label htmlFor="" className={s.label}>
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
                maxLength: { value: 12, message: 'Maximum 12  characters' },
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
                <p className={s.error}>
                  {errors?.password?.message || 'Error!'}
                </p>
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
              disabled={!isValid || !isCheck}
            >
              Sing In
            </Button>
          </Stack>
          <div className={s.wrapOr}>
            <div className={s.lineOr}></div>OR <div className={s.lineOr}></div>
          </div>
          {/* <button className={s.googleWrap} onClick={singInWithGoogle}>
            <FcGoogle />{' '}
            <span className={s.googleText}>Sing in using Google</span>
          </button> */}
          <p className={s.wrapLinkRegister}>
            Or{' '}
            <Link className={s.registerLink} to="/register">
              Register
            </Link>
          </p>
        </div>
      </Box>
      <button className={s.googleWrap} onClick={singInWithGoogle}>
        <FcGoogle /> <span className={s.googleText}>Sing in using Google</span>
      </button>
    </div>
  );
};
export default Form;
