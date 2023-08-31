import { Input, Label } from './InputField.style';

export const InputField = (props) => {
  const handleChange = (e) => {
    if (props.setValue) {
      props.setValue(e.target.value);
    }
  };
  return (
    <Label onChange={handleChange}>
      {props.label}
      <Input {...props} />
    </Label>
  );
};
