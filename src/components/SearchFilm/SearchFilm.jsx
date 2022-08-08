import { useEffect, useState } from 'react';

import s from './SearchFilm.module.css';
import { fetchSearchFilm } from '../../services/movie-api';

const SearchFilm = () => {
  const [valueInput, setValueInput] = useState('');

  // useEffect(() => {
  //   fetchSearchFilm(valueInput).then(console.log);
  // }, [valueInput]);

  const reset = () => {
    setValueInput('');
  };

  const onSubmitForm = e => {
    e.preventDefault();
    reset();
  };

  const onChangeInput = e => {
    setValueInput(e.target.value);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <label htmlFor="">
        <input
          onChange={onChangeInput}
          type="text"
          name=""
          id=""
          className={s.input}
          placeholder="Search film..."
          value={valueInput}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchFilm;
