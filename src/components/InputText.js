const InputText = ({
  type,
  inputValue,
  placeholder,
  onChange,
  validateString,
  children,
  isValidate,
}) => {
  return (
    <div className="input-text">
      <input
        className="form"
        type={type}
        placeholder={placeholder}
        value={inputValue}
        max={20}
        onChange={(e) =>
          onChange(
            isValidate
              ? e.target.value.length < 16 &&
                validateString.test(e.target.value)
                ? e.target.value
                : e.target.value.substring(0, e.target.value.length - 1)
              : validateString.test(e.target.value)
              ? e.target.value
              : e.target.value.substring(0, e.target.value.length - 1)
          )
        }
      />
      <p>{children}</p>
    </div>
  );
};

export default InputText;
