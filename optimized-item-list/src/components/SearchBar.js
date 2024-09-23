import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/itemSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = useCallback(
    (e) => {
      dispatch(setSearchTerm(e.target.value));
    },
    [dispatch]
  );

  return (
    <input
      type="text"
      placeholder="Search items..."
      onChange={handleSearch}
      className="search-bar"
    />
  );
};

export default SearchBar;
