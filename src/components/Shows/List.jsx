import React, { useEffect } from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

import * as S from 'styles';

const ShowList = ({ shows, searchResults, performedSearch }) => {
  useEffect(() => {}, [shows, searchResults, performedSearch]);

  const AllResults = () => {
    return (
      shows &&
      shows.map((show, index) => (
        <Link key={index} to={`/${show.id}`} data-testid={`card_${index}`}>
          <S.Card>
            <LazyLoad offsetVertical={1000}>
              {show.image && <img src={show.image.medium} alt="movie poster" />}
            </LazyLoad>
          </S.Card>
        </Link>
      ))
    );
  };

  const ResultsBasedOnSearch = () => {
    return (
      searchResults &&
      searchResults.map((result, index) => (
        <Link key={index} to={`/${result.show.id}`}>
          <S.Card>
            <LazyLoad offsetVertical={1000}>
              {result.show.image && <img src={result.show.image.medium} alt="movie poster" />}
            </LazyLoad>
          </S.Card>
        </Link>
      ))
    );
  };

  return (
    <S.CardContainer>
      {performedSearch === true ? <ResultsBasedOnSearch /> : <AllResults />}
    </S.CardContainer>
  );
};

export default ShowList;
