import React from 'react';
import { useForm } from 'react-hook-form';

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  console.log(watch('example'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name
        <input
          {...register('firstName', {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.firstName?.type === 'required' && (
          <p>This field is required</p>
        )}
        {errors?.firstName?.type === 'maxLength' && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.firstName?.type === 'pattern' && (
          <p>Alphabetical characters only</p>
        )}
      </label>
      <label>
        Laste Name
        <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
        {errors?.lastName?.type === 'pattern' && (
          <p>Alphabetical characters only</p>
        )}
      </label>
      <label>
        Email
        <input {...register('email')} />
        {errors.email && (
          <p>You Must be older then 18 and younger then 99 years old</p>
        )}
      </label>
      <label>
        Password
        <input {...register('Password')} />
        {errors.Password && (
          <p>You Must be older then 18 and younger then 99 years old</p>
        )}
      </label>
      <input type="submit" />
    </form>
  );
};
export default Registration;
