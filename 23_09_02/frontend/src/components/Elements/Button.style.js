import { styled } from 'styled-components';

export const ButtonComponent = styled.button`
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};

  border: none;
  border-radius: ${(props) => props.borderRadius};

  font-size: 16px;
  font-weight: 600;
  background-color: tomato;
  color: #fff;
  cursor: pointer;
`;
