import styled from 'styled-components';

export const Btn = styled.a`
  font-size: 1.2rem;
  color: ${({ color }) => color || 'blueviolet'} !important;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
