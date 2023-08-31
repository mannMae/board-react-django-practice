import { Input, Label } from './InputField.style';

export const InputField = (props) => {
  return (
    <Label>
      {props.label}
      <Input {...props} />
    </Label>
  );
};
