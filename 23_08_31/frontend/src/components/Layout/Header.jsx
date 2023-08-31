import { Box, Wrapper } from './Header.style';

export const Header = ({ title, leftItem, rightItem }) => {
  return (
    <Wrapper>
      <Box justifyContent="left">{leftItem}</Box>
      <Box justifyContent="center">{title}</Box>
      <Box justifyContent="right">{rightItem}</Box>
    </Wrapper>
  );
};
