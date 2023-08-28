import { BoxComponent } from './Box.style';

export const Box = (props) => {
  return <BoxComponent {...props}>{props.children}</BoxComponent>;
};
