import React from 'react';
import { useForm } from 'react-hook-form';

import s from './Login.module.css';

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch('example'));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <input
        type="text"
        {...register('name')}
        className={s.input}
        placeholder="Enter name..."
      />
      <input
        type="password"
        {...register('password', { required: true })}
        className={s.input}
        placeholder="Enter password..."
      />

      {errors.exampleRequired && <p>This field is required</p>}
      <button type="submit" className={s.btnSubmit}>
        Login
      </button>
      {/* <input type="submit" /> */}
    </form>
  );
};

export default Login;
