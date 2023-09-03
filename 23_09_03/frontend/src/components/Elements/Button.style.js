import { styled } from 'styled-components';

export const ButtonComponent = styled.button`
  position: ${(props) => props.position};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  border-radius: 10px;

  font-size: 18px;
  font-weight: 600;

  color: #fff;
  background-color: tomato;
`;
