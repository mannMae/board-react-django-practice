import { styled } from 'styled-components';

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding: 5px;

  background-color: #eee;
`;

export const Box = styled.div`
  grid-column: span 1;

  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
`;
