import { useState } from 'react';
import { useForm } from 'react-hook-form';

import s from './Comments.module.css';
import imagesDefaultComment from '../../../../images/default-com.jpg';

const Comments = () => {
  const [todoComment, setTodoComment] = useState([
    { name: 'ghghg', text: 'shdjdsj' },
  ]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data); // {name:"ghghg", text:"shdjdsj"}

    setTodoComment([data]); // [{name:"ghghg", text:"shdjdsj"}]

    setTodoComment(prevState => prevState.push(data)); //error
  };
  console.log(todoComment);

  // console.log(watch('name'));

  return (
    <div className={s.wrapForm}>
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
          wrap="hard"
          className={s.textarea}
          name=""
          id=""
          maxLength="200"
          placeholder="Write comment..."
          required
          {...register('text')}
          defaultValue="ффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффф"
        ></textarea>

        {errors.exampleRequired && <span>This field is required</span>}
        <button className={s.clear}>Clear</button>
        <button type="submit" className={s.button}>
          Submit
        </button>
      </form>

      <ul className={s.todoWrap}>
        {todoComment.map(todo => (
          <li>
            <p className={s.name}>{todo.name}</p>
            <div className={s.wrapImgText}>
              <img
                className={s.img}
                src={imagesDefaultComment}
                alt=""
                width="100"
                height="110"
              />
              <div className={s.text}> {todo.text}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
