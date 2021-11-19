import React from 'react';

import * as S from 'styles';

function Pagination({ page, setPage, lastPage }) {
  const next = () => {
    setPage(page + 1);
  };

  const previous = () => {
    setPage(page - 1);
  };

  return (
    <S.PaginationContainer>
      {page > 1 ? <S.Button onClick={previous}>Previous</S.Button> : null}
      {!lastPage ? <S.Button onClick={next}>Next</S.Button> : null}
    </S.PaginationContainer>
  );
}

export default Pagination;
