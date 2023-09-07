import { styled } from 'styled-components';

export const ButtonComponent = styled.button`
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};

  border-radius: 20px;
  padding: 5px 10px;

  background-color: tomato;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;
