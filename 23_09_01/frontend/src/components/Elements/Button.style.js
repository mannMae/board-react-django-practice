import { styled } from 'styled-components';

export const Wrapper = styled.div``;

export const ButtonComponent = styled.button`
  position: ${(props) => props.position};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};

  border: none;
  border-radius: ${(props) => props.borderRadius};

  background-color: tomato;
  font-size: 18px;
  font-weight: 700;
  color: #fff;

  cursor: pointer;
`;
