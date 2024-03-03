const Button = ({ type, className, onEvent, children }) => {
  return (
    <button type={type} className={className} onClick={onEvent}>
      {children}
    </button>
  );
};

export default Button;
