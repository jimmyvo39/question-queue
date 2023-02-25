import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchQuestions } from '../../store/questions';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const searchParams = new URLSearchParams();
    searchParams.set('query', query);
    
    dispatch(searchQuestions(query));

    history.push(`/questions/?${searchParams.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className='search-container'>
      <input className="search" type="text" value={query} placeholder="Search..." onChange={(e) => setQuery(e.target.value)} />
      {/* <button type="submit">Search</button> */}
    </form>
  );
};

export default SearchBar;