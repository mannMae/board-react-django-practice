import { Input, Label } from './InputField.style';

export const InputField = (props) => {
  const handleChangeValue = (e) => {
    if (props.setValue) {
      props.setValue(e.target.value);
    }
  };
  return (
    <Label onChange={handleChangeValue}>
      {props.label}
      <Input {...props} />
    </Label>
  );
};
