import { styled } from 'styled-components';

export const ButtonComponent = styled.button`
  position: ${(props) => props.position && props.position};
  bottom: ${(props) => props.bottom && props.bottom};
  right: ${(props) => props.right && props.right};

  cursor: pointer;
`;
