import { Input, Label } from './InputField.style';

export const InputField = (props) => {
  const handleChange = (e) => {
    if (props.setValue) {
      props.setValue(e.target.value);
    }
  };

  return (
    <Label onChange={(e) => handleChange(e)}>
      {props.label}
      <Input {...props} />
    </Label>
  );
};
