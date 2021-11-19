import styled from 'styled-components';

const COLORS = {
  pink: '#ea4c89',
  grey: '#F3F3F4',
  gradient: 'linear-gradient(45deg, #FA7CBB, #F14658)'
};

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
    font-family: 'Roboto', sans-serif;
`;

export const Header = styled.div`
    border-bottom: 1px solid ${COLORS.grey};
    height: 60px;
    transition: top 0.2s linear;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    h1 {
      padding-left: 20px;
      font-size: 30px;
    }
    a {
      text-decoration: none;
      color: black;
    }
    @media (min-width: 768px) {
      h1 {
        padding-left: 60px;
      }
  }
`;

export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (min-width: 768px) {
    padding: 30px 60px;
  }
`;

export const LoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorMessageContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  border-radius: 20px;
  &:hover {
    transform: scale(1.05);
  }
  a {
    position: fixed;
    bottom: 10px;
  }
  img {
    border-radius: 20px;
    height: 171px;
    width: 122px;
  }
  @media (min-width: 768px) {
    img {
      height: 295px;
      width: 210px;
    }
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 75%;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    height: 40px;
    border:1px solid #dcdcdc;
    border-radius: 4px;
    margin-right: 10px;
    padding-left: 40px;
    margin-bottom: 10px;
    :hover {
      box-shadow: 1px 1px 8px 1px #dcdcdc;
    }
    :focus-within {
      box-shadow: 1px 1px 8px 1px #dcdcdc;
      outline:none;
    }

    @media (min-width: 768px) {
      width: 70%;
    }
  }`;

  export const SearchIcon = styled.span`
    position: absolute;
    margin: 10px;
    color: #9e9ea7;
  `;

  export const Button = styled.button`
    background-color: ${COLORS.pink};
    border: 1px solid ${COLORS.pink};
    border-radius: 4px;
    font-size: 16px;
    line-height: 24px;
    color: white;
    height: 40px;
    width: 100%;
    margin-right: 20px;
    :hover {
      cursor: pointer;
      background: ${COLORS.gradient};
    }
    @media (min-width: 768px) {
      width: 90px;
    }
  `;

export const ShowContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px 20px;
  p {
    font-size: 14px;
    }      
  
  @media (min-width: 768px) {
    padding: 30px 60px;
  }
`;

export const ShowDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ShowDetails = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding: 0 20px;
  }
  `;

export const Description = styled.div`
`;

export const GenreContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;

export const GenreButton = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  height: 30px;
  width: auto;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: ${COLORS.gradient};
`;

export const Rating = styled.div`
  display: inline-flex;
  align-items: center;
  font-weight: 800;
  color: ${COLORS.pink}; 
  p {
      padding-left: 10px;
  }
`;

export const PaginationContainer = styled.div`
  width: 100%;
  display: inline-flex;
  margin: 40px;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 20%;
  }

`;
