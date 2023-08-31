import { styled } from 'styled-components';

export const Wrapper = styled.section``;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 10px;
`;

export const Post = styled.div`
  border: 1px solid tomato;
  border-radius: 10px;

  padding: 10px;

  background-color: #fff;

  cursor: pointer;
`;

export const PostTitle = styled.h5`
  margin: 0;
`;

export const PostContent = styled.p`
  margin: 0;
`;
