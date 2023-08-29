import { styled } from 'styled-components';

export const ButtonComponent = styled.button`
  position: ${(props) => (props.position ? props.position : null)};
  bottom: ${(props) => (props.bottom ? props.bottom : null)};
  right: ${(props) => (props.right ? props.right : null)};

  border: ${(props) => (props.border ? props.border : 'none')};
  border-radius: 10px;
  padding: ${(props) => (props.padding ? props.padding : '5px')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#eee'};
  color: ${(props) => (props.color ? props.color : '#000')};

  cursor: pointer;
`;
