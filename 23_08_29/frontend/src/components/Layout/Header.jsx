import { Item, Title, Wrapper } from './Header.style';

export const Header = ({ title, leftItem, rightItem }) => {
  return (
    <Wrapper>
      <Item>{leftItem}</Item>
      <Title>{title}</Title>
      <Item>{rightItem}</Item>
    </Wrapper>
  );
};
