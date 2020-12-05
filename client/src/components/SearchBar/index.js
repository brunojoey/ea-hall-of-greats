import React, { useState, useEffect } from "react";
import './SearchBar.scss';

function SearchBar (props) {
  const { history, query } = props;
  const [filter, setFilter] = useState('');
  const [word, setWord] = useState('');
  console.log('props', props)

  const handleChange = (event) => {
    setFilter(event.target.value.toLowerCase());
    if (event !== '') {
      let newGameList = [];


    }
    console.log('event', event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <section className='search-bar'>
      <input type='search' className='queryHOG' name='queryHOG' placeholder='Search Nominations' onChange={handleChange} ></input>
    </section>
  );
};

export default SearchBar;
