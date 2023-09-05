import { styled } from 'styled-components';

export const ButtonComponent = styled.button`
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};

  padding: 5px;
  border-radius: 10px;

  background-color: tomato;
  color: #fff;
`;
