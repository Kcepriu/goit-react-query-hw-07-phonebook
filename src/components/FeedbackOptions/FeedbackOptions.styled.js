import styled from 'styled-components';

export const Controls = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtomControl = styled.button`
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  outline: none;

  &::first-letter {
    text-transform: uppercase;
  }
  &:hover {
    background-color: peachpuff;
    transform: scale(1.2);
  }
`;
