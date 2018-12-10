import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    border: 0;
    font-size: 1.2rem;
    color: #444;
    border-radius: 5px;
  }
  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b8;
    color: #fff;
    border: 0;
    font-weight: bold;
    font-size: 1.4rem;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background: #52d89f;
    }
  }
`;
