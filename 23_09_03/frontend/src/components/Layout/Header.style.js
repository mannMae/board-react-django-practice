import { styled } from 'styled-components';

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding: 10px;

  background-color: tomato;
`;

export const Box = styled.div`
  grid-column: span 1;

  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
`;

export const Title = styled.h3`
  font-size: 30px;
`;
