import { styled } from 'styled-components';

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding: 15px;
  background-color: tomato;

  font-size: 16px;
  color: #fff;
`;

export const Box = styled.div`
  grid-column: span 1;

  display: flex;
  justify-content: ${(props) => props.justifyContent};
`;

export const Title = styled.h3`
  margin: 0;
`;
