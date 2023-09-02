import { Box, Title, Wrapper } from './Header.style';

export const Header = (props) => {
  return (
    <Wrapper {...props}>
      <Box justifyContent="start">{props.leftItem}</Box>
      <Box justifyContent="center">
        <Title>{props.title}</Title>
      </Box>
      <Box justifyContent="end">{props.rightItem}</Box>
    </Wrapper>
  );
};
