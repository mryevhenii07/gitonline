import { useState } from 'react';

const Form = ({ handelClick, title }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [nickName, setNickName] = useState('');
  return (
    <div>
      <input
        type="email"
        name=""
        id=""
        value={email}
        placeholder="email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        name=""
        id=""
        value={pass}
        placeholder="password"
        onChange={e => setPass(e.target.value)}
      />
      {/* <input
        type="text"
        name=""
        id=""
        value={nickName}
        placeholder="nickName"
        onChange={e => setNickName(e.target.value)}
      /> */}
      <button onClick={() => handelClick(email, pass)}> {title}</button>
    </div>
  );
};

export default Form;
