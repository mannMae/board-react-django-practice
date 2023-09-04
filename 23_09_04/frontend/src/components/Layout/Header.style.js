import { styled } from 'styled-components';

export const Wrapper = styled.header`
  height: 50px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding: 10px;
  background-color: tomato;
`;

export const Box = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #fff;
`;
