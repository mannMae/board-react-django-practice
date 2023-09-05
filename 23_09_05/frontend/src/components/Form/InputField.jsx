import { Input } from './InputField.style';

export const InputField = (props) => {
  const handleChange = (e) => {
    if (props.setValue) {
      props.setValue(e.target.value);
    }
  };
  return <Input onChange={handleChange} {...props} {...props.registration} />;
};
