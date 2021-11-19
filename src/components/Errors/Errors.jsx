import React from 'react';

import * as S from 'styles';

export const Error = ({ error }) => {
  return <S.ErrorMessageContainer>Error: {error.message}</S.ErrorMessageContainer>;
};

export const NoResults = () => {
  return (
    <S.ErrorMessageContainer>There are no shows that match your search</S.ErrorMessageContainer>
  );
};
