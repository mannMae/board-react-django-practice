import { styled } from 'styled-components';

export const Wrapper = styled.section``;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 20px;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  border: 1px solid tomato;
  border-radius: 10px;
  padding: 20px;

  cursor: pointer;

  &:hover {
    background-color: #ffaaaa;
  }
`;

export const PostTitle = styled.h5`
  margin: 0;
`;

export const PostContent = styled.p`
  margin: 0;
`;
