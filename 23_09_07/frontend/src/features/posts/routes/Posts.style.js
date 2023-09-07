import { styled } from 'styled-components';

export const Wrapper = styled.section``;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  border: 1px solid tomato;
  padding: 20px;

  cursor: pointer;
`;

export const Title = styled.h5`
  font-size: 20px;
  font-weight: 600;
  word-wrap: break-word;
`;

export const Content = styled.p`
  font-size: 18px;
  word-wrap: break-word;
`;
