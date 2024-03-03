import Button from "./Button";
import InputTicket from "./InputTicket";
import PopUp from "./PopUp";

export const UpdateForm = ({
  updateTicket,
  setUpdateTicket,
  onUpdateMember,
  setSelectedMember,
  selectedMember,
  onConfirm,
  setConfirm,
  confirm,
  onDeleteMember,
  confirmUpdate,
  setConfirmUpdate,
}) => {
  const handleSubmit = (selectedMember) => {
    const updatedMember = {
      ...selectedMember,
      ticket: selectedMember.ticket + updateTicket,
    };
    onUpdateMember(updatedMember);
    setSelectedMember(null);
    setConfirmUpdate(false);
  };

  return (
    <>
      <form
        className="animate__animated animate__fadeIn update-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <h4>ID</h4>
        <h3>{selectedMember.id}</h3>
        <h4>Name</h4>
        <h3>{selectedMember.name}</h3>
        <h4>Email</h4>
        <h3>{selectedMember.email}</h3>
        <h4>Total Ticket</h4>
        <h3>{selectedMember.ticket + updateTicket}</h3>

        <InputTicket
          inputValue={updateTicket}
          onChange={setUpdateTicket}
          allowMines={true}
          selectedMember={selectedMember}
        >
          Top Up Ticket / Set Ticket
        </InputTicket>

        <div className="button-form-container">
          <div className="back-delete">
            <Button
              className="button-form"
              onEvent={() => setSelectedMember(null)}
            >
              Back
            </Button>
            <Button
              type="button"
              className="button-form delete"
              onEvent={() => onConfirm()}
            >
              Delete Account
            </Button>
          </div>
          <Button
            className="button-form update"
            onEvent={() =>
              selectedMember.ticket !== updateTicket + selectedMember.ticket &&
              setConfirmUpdate(true)
            }
          >
            Update
          </Button>
        </div>
      </form>
      {confirm && (
        <PopUp
          setConfirm={setConfirm}
          onDeleteMember={onDeleteMember}
          selectedMember={selectedMember}
          text={`Are you sure want to delete "${selectedMember.id}"`}
        />
      )}
      {confirmUpdate &&
        selectedMember.ticket !== updateTicket + selectedMember.ticket && (
          <PopUp
            setConfirm={setConfirmUpdate}
            onDeleteMember={handleSubmit}
            selectedMember={selectedMember}
            text={`Are you sure want to update "${
              selectedMember.id
            }" ticket from ${selectedMember.ticket} to ${
              updateTicket + selectedMember.ticket
            }`}
          />
        )}
    </>
  );
};

export default UpdateForm;
