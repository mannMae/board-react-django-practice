import { styled } from 'styled-components';

export const ButtonComponent = styled.button`
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};

  padding: ${(props) => props.padding};
  border: none;
  border-radius: ${(props) => props.borderRadius};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  font-weight: 600;

  color: ${(props) => (props.color ? props.color : '#fff')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'tomato'};
  cursor: pointer;
`;
