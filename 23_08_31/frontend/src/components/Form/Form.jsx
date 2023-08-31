export const Form = ({ children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return <form onSubmit={handleSubmit}>{children}</form>;
};
