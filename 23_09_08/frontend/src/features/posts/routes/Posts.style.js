import { styled } from 'styled-components';

export const Wrapper = styled.section``;

export const Box = styled.div`
  padding: 20px;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border: ${(props) => `1px solid ${props.theme.borderColor}`};

  background-color: ${(props) => props.theme.mainBgColor};
  transition: all ease 0.5s 0s;

  &:hover {
    background-color: ${(props) => props.theme.highlightColor};
  }
`;

export const Title = styled.h5`
  font-size: 20px;
  color: ${(props) => props.theme.fontColor};

  word-wrap: break-word;
`;

export const Content = styled.p`
  font-size: 18px;

  word-wrap: break-word;
`;
