import { Box, Title, Wrapper } from './Header.style';

export const Header = ({ title, leftItem, rightItem }) => {
  return (
    <Wrapper>
      <Box>{leftItem}</Box>
      <Box justifyContent="center">
        <Title>{title}</Title>
      </Box>
      <Box justifyContent="end">{rightItem}</Box>
    </Wrapper>
  );
};
