import React from 'react';
import Loader from 'react-loader-spinner';

import * as S from 'styles';

function Loading() {
  return (
    <S.LoadingContainer>
      <Loader type="ThreeDots" color="#ea4c89" height={100} width={100} timeout={3000} />
    </S.LoadingContainer>
  );
}

export default Loading;
