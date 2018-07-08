import React from 'react';
import '../../css/search.css';


const Search = props => (
  <button className="search" onClick={props.getPlace}>
    Find place
  </button>
);

export default Search;
