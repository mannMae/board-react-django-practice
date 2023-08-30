export const Form = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.onSubmit) {
      props.onSubmit();
    }
  };
  return <form onSubmit={(e) => handleSubmit(e)}>{props.children}</form>;
};
