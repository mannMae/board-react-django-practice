import { Input, Label } from './InputField.style';

export const InputField = (props) => {
  const handleChangeValue = (e) => {
    props.setValue(e.target.value);
  };

  return (
    <Label onChange={handleChangeValue} {...props}>
      {props.label}
      <Input value={props.value} placeholder={props.placeholder} />
    </Label>
  );
};
