import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './RegisterForm.module.css';

const RegisterForm = ({ handelClick, title }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [nickName, setNickName] = useState('');
  return (
    <div className={s.wrapForm}>
      <form className={s.form}>
        <h2 className={s.title}>Registration</h2>
        <label htmlFor="" className={s.label}>
          NickName
          <input
            className={s.input}
            onChange={e => setNickName(e.target.value)}
            type="text"
            name=""
            id=""
            value={nickName}
            placeholder="Example: goodMan007"
          />
        </label>
        <label htmlFor="" className={s.label}>
          Email
          <input
            className={s.input}
            onChange={e => setEmail(e.target.value)}
            type="email"
            name=""
            id=""
            value={email}
            placeholder="Example: gitonline@gmail.com"
          />
        </label>
        <label htmlFor="" className={s.label}>
          Password
          <input
            className={s.input}
            onChange={e => setPass(e.target.value)}
            type="password"
            name=""
            id=""
            value={pass}
            placeholder="Example: vasya12345"
          />
        </label>
        <button
          onClick={() => handelClick(email, pass)}
          className={s.btnSubmit}
        >
          Register
        </button>
        <br />
        Already have an account <Link to="/login"> login</Link>
      </form>
    </div>
  );
};

export default RegisterForm;
