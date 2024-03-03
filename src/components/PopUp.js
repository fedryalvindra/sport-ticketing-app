import Button from "./Button";

const PopUp = ({ setConfirm, onDeleteMember, selectedMember, text }) => {
  return (
    <div className="modal">
      <div className="popup-container-confimation">
        <div className="member-form">
          <h3>{text}</h3>
          <div className="confirmation-container">
            <Button
              className="confirmation redd"
              onEvent={() => setConfirm(false)}
            >
              No
            </Button>
            <Button
              className="confirmation"
              onEvent={() => onDeleteMember(selectedMember)}
            >
              Yes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
