import React from 'react';

import s from './SearchFilm.module.css';

const SearchFilm = () => {
  return (
    <form>
      <label htmlFor="">
        <input
          type="text"
          name=""
          id=""
          className={s.input}
          placeholder="Name title..."
        />
      </label>
      <button>Search</button>
    </form>
  );
};

export default SearchFilm;
