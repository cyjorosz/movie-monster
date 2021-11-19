import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import * as S from 'styles';

const Search = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <S.SearchContainer>
      <form onSubmit={handleSearch} role="search">
        <input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          required
        />
        <S.SearchIcon>
          <AiOutlineSearch />
        </S.SearchIcon>
        <S.Button type="submit">Search</S.Button>
      </form>
    </S.SearchContainer>
  );
};

export default Search;
