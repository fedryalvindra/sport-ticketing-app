import Button from "./Button";

const InputTicket = ({
  inputValue,
  onChange,
  color,
  allowMines,
  selectedMember,
  children,
}) => {
  return (
    <>
      <label>
        <h4 style={{ color: color }}>{children}</h4>
      </label>
      <div className="input-qty">
        <Button
          type={"button"}
          className="mines"
          onEvent={() =>
            onChange((ticket) =>
              allowMines && selectedMember?.ticket + ticket !== 0
                ? ticket - 1
                : ticket > 0
                ? ticket - 1
                : ticket
            )
          }
        >
          -
        </Button>
        <input type="text" value={inputValue} disabled />
        <Button
          type={"button"}
          className="plus"
          onEvent={() => onChange((ticket) => ticket + 1)}
        >
          +
        </Button>
      </div>
    </>
  );
};

export default InputTicket;
