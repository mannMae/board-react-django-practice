import { Box, Title, Wrapper } from './Header.style';

export const Header = ({ title, leftItem, rightItem }) => {
  return (
    <Wrapper>
      <Box justifyContent="start">{leftItem}</Box>
      <Box>
        <Title>{title}</Title>
      </Box>
      <Box justifyContent="end">{rightItem}</Box>
    </Wrapper>
  );
};
