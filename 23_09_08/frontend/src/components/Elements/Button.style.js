import { styled } from 'styled-components';

export const ButtonComponent = styled.button`
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};

  border: ${(props) => `1px solid ${props.theme.borderColor}`};
  border-radius: 5px;

  background-color: ${(props) => props.theme.mainBgColor};
  color: ${(props) => props.theme.fontColor};
`;
