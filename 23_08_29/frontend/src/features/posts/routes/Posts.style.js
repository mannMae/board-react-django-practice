import { styled } from 'styled-components';

export const Wrapper = styled.section``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  border: 1px solid #555;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`;

export const ListItemTitle = styled.h5``;

export const ListItemContent = styled.p``;
