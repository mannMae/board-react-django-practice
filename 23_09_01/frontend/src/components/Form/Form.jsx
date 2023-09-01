export const Form = ({ children, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return <form onSubmit={(e) => handleSubmit(e)}>{children}</form>;
};
