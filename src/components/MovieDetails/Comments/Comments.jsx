import { useState } from 'react';
import { useForm } from 'react-hook-form';

import s from './Comments.module.css';
import imagesDefaultComment from '../../../images/default-com.jpg';
import { auth } from '../../../firebase';

const Comments = () => {
  const [todoComment, setTodoComment] = useState([]);
  const [maxLetters, setMaxLetters] = useState(200);
  const [nickName, setNickName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    setTodoComment((prevState = []) => {
      setNickName(auth.currentUser.displayName);
      setProfilePicture(auth.currentUser.photoURL);
      return [...prevState, data];
    });

    reset();
  };

  return (
    <div className={s.wrapForm}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <p className={s.comments}>Comments</p>
        <label htmlFor="" className={s.label}>
          <input
            placeholder="Your name..."
            type="text"
            {...register('name', { required: true })}
            className={s.input}
          />
        </label>
        <br />
        <textarea
          className={s.textarea}
          maxLength="200"
          placeholder="Write comment..."
          required
          {...register('text')}
        ></textarea>

        {errors.exampleRequired && <span>This field is required</span>}
        <button className={s.clear} onClick={() => reset({ text: '' })}>
          Clear
        </button>
        <button type="submit" className={s.button}>
          Submit
        </button>
      </form>

      <ul>
        {todoComment.map(({ name, text }, ind) => (
          <li className={s.todoWrap} key={ind}>
            <p className={s.name}>
              NickName: <span className={s.nickName}>{nickName}</span>{' '}
            </p>
            <div className={s.wrapImgText}>
              <img
                className={s.img}
                src={profilePicture}
                // src={profilePicture && imagesDefaultComment}
                alt=""
                width="100"
                height="110"
              />
              <div>
                <p className={s.text}> {name}</p>
                <p className={s.text}> {text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
