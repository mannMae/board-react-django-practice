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
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;
