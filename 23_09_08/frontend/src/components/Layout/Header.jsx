import { Box, Title, Wrapper } from './Header.style';

export const Header = ({ title, leftItem, rightItem }) => {
  return (
    <Wrapper>
      <Box justify-content="start">{leftItem}</Box>
      <Box justify-content="center">
        <Title>{title}</Title>
      </Box>
      <Box justify-content="end">{rightItem}</Box>
    </Wrapper>
  );
};
