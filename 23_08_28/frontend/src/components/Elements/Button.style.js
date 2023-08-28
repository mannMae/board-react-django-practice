import { styled } from 'styled-components';

export const ButtonComponent = styled.button`
  width: ${(props) => (props.width ? props.width : null)};
`;
