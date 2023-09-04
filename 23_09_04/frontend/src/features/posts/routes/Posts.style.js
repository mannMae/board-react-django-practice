import { styled } from 'styled-components';

export const Wrapper = styled.section``;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 20px;
`;

export const Post = styled.div`
  border: 1px solid tomato;
  border-radius: 10px;
  padding: 20px;

  cursor: pointer;
`;

export const PostTitle = styled.h5`
  font-size: 24px;
  font-weight: 600;
`;

export const PostContet = styled.p`
  font-size: 18px;
`;
