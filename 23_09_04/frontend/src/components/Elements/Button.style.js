import { styled } from 'styled-components';

export const ButtonComponent = styled.button`
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};

  border-radius: 10px;

  font-size: 18px;
  color: #fff;
  background-color: tomato;
`;
