import { styled } from 'styled-components';

export const BoxComponent = styled.div`
  width: ${(props) => (props.width ? props.width : null)};

  display: ${(props) => (props.display ? props.display : 'flex')};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : null};
  gap: ${(props) => (props.gap ? props.gap : '10px')};
`;
