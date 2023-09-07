import { Box, Title, Wrapper } from './Header.style';

export const Header = ({ title, leftItem, rightItem }) => {
  return (
    <Wrapper>
      <Box justifyContent="left">{leftItem}</Box>
      <Box justifyContent="center">
        <Title>{title}</Title>
      </Box>
      <Box justifyContent="right">{rightItem}</Box>
    </Wrapper>
  );
};
