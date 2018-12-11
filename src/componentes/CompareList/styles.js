import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
  max-width: 1080px;
  flex-wrap: wrap;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 15px -2px rgba(0, 0, 0, 0.6);

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .actions {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    img {
      width: 64px;
    }
    strong {
      font-size: 2rem;
      margin-top: 10px;
    }
    small {
      font-size: 1.2rem;
      color: #999;
    }
  }
  ul {
    list-style: none;
    li {
      font-weight: bold;
      padding: 12px 20px;
      small {
        font-weight: normal;
        font-size: 1rem;
        color: #999;
        font-style: italic;
        margin-left: 5px;
      }
      &:nth-child(2n-1) {
        background: #f5f5f5;
      }
    }
  }
`;
