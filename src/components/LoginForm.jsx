// import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

import { setUser } from '../store/slices/userSlice';
import s from './RegisterForm/RegisterForm.module.css';

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
      <h1 className={s.title}>Login</h1>
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
            Sing In
          </Button>
        </Stack>
        <p className={s.wrapLinkRegister}>
          Or{' '}
          <Link className={s.registerLink} to="/register">
            Register
          </Link>
        </p>
      </div>
    </Box>
  );
};
export default Form;
// // import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// import { setUser } from '../store/slices/userSlice';
// import s from './LoginForm/LoginForm.module.css';

// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// const Form = () => {
//   let navigate = useNavigate();
//   const dispatch = useDispatch();

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = ({ email, password }) => {
//     console.log(email);
//     console.log(password);
//     const auth = getAuth();
//     signInWithEmailAndPassword(auth, email, password)
//       .then(({ user }) => {
//         console.log(user);
//         dispatch(
//           setUser({
//             email: user.email,
//             id: user.uid,
//             token: user.accessToken,
//           }),
//         );
//         navigate('/');
//       })
//       .catch(console.error);
//   };

//   // console.log(watch('example'));

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
//       <h1 className={s.title}>Login</h1>
//       {/* <Box
//         // onSubmit={handleSubmit(onSubmit)}
//         className={s.form}
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <div>
//           <TextField
//             {...register('email', { required: true })}
//             type="text"
//             id="standard-helperText"
//             label="Email"
//             // defaultValue="Default Value"
//             // helperText="Some important text"
//             variant="standard"
//           />
//           <TextField
//             {...register('password', { required: true })}
//             id="standard-password-input"
//             label="Password"
//             type="password"
//             autoComplete="current-password"
//             variant="standard"
//           />
//         </div>
//       </Box> */}

//       <input type="text" {...register('email', { required: true })} />

//       <input type="password" {...register('password', { required: true })} />

//       {/* <input type="submit" /> */}
//       <Stack spacing={2} direction="row">
//         <Button type="submit" variant="contained">
//           Sing In
//         </Button>
//       </Stack>
//     </form>
//   );
// };
// export default Form;
