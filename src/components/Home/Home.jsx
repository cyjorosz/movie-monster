import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Search from 'components/Search/Search';
import ShowList from 'components/Shows/List';
import Pagination from 'components/Pagination/Pagination';
import Loading from 'components/Loading/Loading';
import { Error, NoResults } from 'components/Errors/Errors';

import * as S from 'styles';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const [emptyResults, setEmptyResults] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [performedSearch, setPerformedSearch] = useState(false);

  const SHOW_API = `https://api.tvmaze.com/shows?`;
  const SEARCH_API = `https://api.tvmaze.com/search/shows?`;

  const getShows = async () => {
    setLoading(true);
    try {
      const response = await axios.get(SHOW_API, { params: { page } });
      setLoading(false);
      window.scroll(0, 0);
      setShows(response.data);
      setLastPage(response.data.length < 1);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const handleNoResults = (response) => {
    if (response.data.length === 0) {
      setEmptyResults(true);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setEmptyResults(false);
    setPerformedSearch(true);
    try {
      const response = await axios.get(SEARCH_API, { params: { q: searchTerm } });
      setLoading(false);
      handleNoResults(response);
      setSearchResults(response.data);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getShows();
  }, [page, SHOW_API]);

  return (
    <S.Container>
      <S.Header>
        <h1>Movie Monster</h1>
      </S.Header>
      <S.Wrapper>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
        {emptyResults && <NoResults />}
        {error && <Error error={error} />}
        {loading ? <Loading /> : null}
        <ShowList
          shows={shows}
          searchResults={searchResults}
          performedSearch={performedSearch}
          setError={setError}
          setLoading={setLoading}
        />
        {!performedSearch && !error && (
          <Pagination page={page} lastPage={lastPage} setPage={setPage} />
        )}
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
