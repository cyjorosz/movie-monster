import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { AiFillStar } from 'react-icons/ai';

import * as S from 'styles';

const Show = ({ setError }) => {
  const { id } = useParams();
  const [show, setShow] = useState({});

  const SHOW_API = `https://api.tvmaze.com/shows/${id}`;

  const getShowDetails = async () => {
    try {
      const response = await axios.get(SHOW_API);
      setShow(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getShowDetails();
  }, [id, SHOW_API, setError]);

  return (
    <>
      <S.Header>
        <a href={show.officialSite} target="_blank" rel="noreferrer">
          <h1>{show.name}</h1>
        </a>
      </S.Header>
      <S.ShowContainer>
        <S.ShowDetailsContainer>
          {show.image && <img src={show.image.medium} alt="movie poster" />}
          <S.ShowDetails>
            {show.rating && show.rating.average ? (
              <S.Rating>
                <AiFillStar />
                <p>Average Rating: {show.rating.average}</p>
              </S.Rating>
            ) : null}
            {show.genres ? (
              <S.GenreContainer>
                {show.genres.map((genre, index) => {
                  return <S.GenreButton key={index}>{genre}</S.GenreButton>;
                })}
              </S.GenreContainer>
            ) : null}
            <p>Language: {show.language}</p>
          </S.ShowDetails>
        </S.ShowDetailsContainer>
        <S.Description>
          <h3>Summary</h3>
          <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
        </S.Description>
      </S.ShowContainer>
    </>
  );
};

export default Show;
