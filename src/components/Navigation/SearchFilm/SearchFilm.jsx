import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SearchContext } from '../../../App';
import s from './SearchFilm.module.css';

const SearchFilm = () => {
  const [query, setQuery] = useState('');
  const { setSearchValue } = useContext(SearchContext);

  const { push } = useHistory();

  const reset = () => {
    setQuery('');
  };

  const onClick = () => {
    push('/');
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
    <div>
      {}
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
        <button className={s.btn} type="submit" onClick={onClick}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchFilm;
