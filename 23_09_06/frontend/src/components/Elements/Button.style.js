import { styled } from 'styled-components';

export const ButtonComponent = styled.button`
  position: ${(props) => props.position};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};

  border-radius: 10px;
  padding: 5px;

  font-size: 14px;
  font-weight: 600;

  background-color: tomato;
  color: #fff;
`;
