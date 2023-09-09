import { styled } from 'styled-components';

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  border-bottom: ${(props) => `1px solid ${props.theme.borderColor}`};

  height: 40px;
  background-color: ${(props) => props.theme.mainBgColor};
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.fontColor};
`;

export const Box = styled.div`
  display: flex;
  justify-content: ${(props) => props['justify-content']};
  align-items: center;
`;
