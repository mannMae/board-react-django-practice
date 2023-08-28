import { styled } from 'styled-components';

export const Label = styled.label`
  width: ${(props) => (props.width ? props.width : '100%')};

  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;

  color: ${(props) => (props.color ? props.color : null)};
`;

export const Input = styled.input`
  width: 400px;
  padding: 5px;
`;
