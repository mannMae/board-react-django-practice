import { ButtonComponent, Wrapper } from './Button.style';

export const Button = (props) => {
  return <ButtonComponent {...props}>{props.children}</ButtonComponent>;
};
