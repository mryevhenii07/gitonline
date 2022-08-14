import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './FormLogin.module.css';

const FormLogin = ({ handelClick, title }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  //   const [nickName, setNickName] = useState('');
  return (
    <div className={s.wrapForm}>
      <form className={s.form}>
        <h2 className={s.title}>Login</h2>
        <input
          className={s.input}
          onChange={e => setEmail(e.target.value)}
          type="email"
          name=""
          id=""
          value={email}
          placeholder="Enter email"
        />
        <input
          className={s.input}
          onChange={e => setPass(e.target.value)}
          type="password"
          name=""
          id=""
          value={pass}
          placeholder="Enter password"
        />
        <button
          onClick={() => handelClick(email, pass)}
          className={s.btnSubmit}
        >
          Login
        </button>
        Or <Link to="/register"> register</Link>
      </form>
    </div>
  );
};

export default FormLogin;
