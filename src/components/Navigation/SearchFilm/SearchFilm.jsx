import { useContext, useState } from 'react';

import { SearchContext } from '../../../App';
import s from './SearchFilm.module.css';

const SearchFilm = () => {
  const [query, setQuery] = useState('');
  const { setSearchValue } = useContext(SearchContext);

  const reset = () => {
    setQuery('');
  };

  const onSubmitForm = e => {
    e.preventDefault();
    setSearchValue(query);
    reset();
  };

  const onChangeInput = e => {
    setQuery(e.target.value);
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
          value={query}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchFilm;
