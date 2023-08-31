import { styled } from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding: 10px;
  background-color: tomato;
`;

export const Box = styled.div`
  grid-column: span 1;

  display: flex;
  justify-content: ${(props) => props.justifyContent};
`;
