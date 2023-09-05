import { styled } from 'styled-components';

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding: 15px;

  background-color: tomato;
`;

export const Box = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
`;
