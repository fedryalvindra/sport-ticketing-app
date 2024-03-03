import { useState } from "react";
import Button from "./Button";
import InputTicket from "./InputTicket";
import InputText from "./InputText";

const MemberForm = ({ generateID, onPopUp, onAddMember }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ticket, setTicket] = useState(1);
  const [seePassword, setSeePassword] = useState(false);

  const nameValidation = name.length < 6;
  const emailValidation = email.endsWith("@gmail.com");
  const passwordValidation = password.length < 8;
  const validate = /^[A-Za-z0-9]+$/;
  const validateGmail = /^[A-Za-z0-9@.]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameValidation || !emailValidation || passwordValidation) return;
    const newMember = {
      id: generateID(),
      name,
      email,
      password,
      ticket,
    };

    onAddMember(newMember);
    onPopUp(false);
  };
  return (
    <div className="modal">
      <div className="popup-container">
        <span
          style={{
            fontSize: "28px",
            textAlign: "end",
            marginRight: "20px",
            cursor: "pointer",
          }}
          onClick={onPopUp}
        >
          ✕
        </span>
        <form className="member-form" onSubmit={handleSubmit}>
          <InputText
            inputValue={name}
            placeholder={"Name"}
            onChange={setName}
            validateString={validate}
            isValidate={true}
          >
            {nameValidation && "Username must more than 6 words"}
          </InputText>
          <InputText
            inputValue={email}
            placeholder={"Email"}
            onChange={setEmail}
            isValidate={false}
            validateString={validateGmail}
          >
            {!emailValidation && "Email must end with @gmail.com"}
          </InputText>
          <InputText
            inputValue={password}
            placeholder={"Password"}
            onChange={setPassword}
            type={seePassword ? "text" : "password"}
            validateString={validate}
            isValidate={true}
          >
            {passwordValidation && "Password must more than 8 words"}
          </InputText>

          <div className="show-password-container">
            <input
              type="checkbox"
              className="check-box"
              onChange={() => setSeePassword(!seePassword)}
            />
            <label>Show password</label>
          </div>

          <InputTicket
            inputValue={ticket}
            onChange={setTicket}
            allowMines={false}
          >
            Ticket
          </InputTicket>
          <Button type={"submit"} className="button-account">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MemberForm;
