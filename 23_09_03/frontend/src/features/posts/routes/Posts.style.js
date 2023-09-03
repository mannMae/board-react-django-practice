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
  gap: 15px;

  border: 1px solid tomato;
  border-radius: 10px;
  padding: 15px;

  cursor: pointer;
`;

export const PostTitle = styled.h5`
  font-weight: 600;
  font-size: 20px;
`;

export const Content = styled.p`
  font-size: 20px;
`;
