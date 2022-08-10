import React from 'react';
import { useForm } from 'react-hook-form';

import s from './Comments.module.css';

const Comments = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch('name'));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <p className={s.comments}>Comments</p>
      <label htmlFor="" className={s.label}>
        <input
          placeholder="Your name..."
          type="text"
          {...register('name')}
          className={s.input}
        />
      </label>
      <br />
      <textarea
        className={s.textarea}
        name=""
        id=""
        maxlength="200"
        placeholder="Write comment..."
        required
        {...register('text')}
      ></textarea>

      {errors.exampleRequired && <span>This field is required</span>}
      <button className={s.clear}>Clear</button>
      <button type="submit" className={s.button}>
        Submit
      </button>
    </form>
  );
};

export default Comments;
