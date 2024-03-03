import { useState } from "react";
import "animate.css";
import Members from "./Members";
import Header from "./Header";
import UpdateForm from "./UpdateForm";
import Layout from "./Layout";
import MemberForm from "./MemberForm";

const memberList = [
  {
    id: "MSB001",
    name: "FedryAlvindra",
    email: "fedryalvindra01@gmail.com",
    password: "fedry123",
    ticket: 10,
  },
  {
    id: "MSB002",
    name: "JokoArdhana",
    email: "jokoarhana@gmail.com",
    password: "jokdhn123",
    ticket: 0,
  },
  {
    id: "MSB003",
    name: "HanaAngeline",
    email: "hanaAAA123@gmail.com",
    password: "hanaa091",
    ticket: 1,
  },
];

const App = () => {
  const [members, setMembers] = useState(memberList);
  const [selectedMember, setSelectedMember] = useState(null);
  const [popupIsOpen, setPopUpIsOpen] = useState(false);
  const [updateTicket, setUpdateTicket] = useState(0);
  const [search, setSearch] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [confirmUpdate, setConfirmUpdate] = useState(false);

  const handlePopUp = () => {
    setPopUpIsOpen(!popupIsOpen);
  };

  const handleAddMember = (newMember) => {
    setMembers((members) => [newMember, ...members]);
  };

  const handleSelectedMember = (selectedMember) => {
    setSelectedMember(selectedMember);
    setUpdateTicket(0);
  };

  const handleUpdateMember = (updatedMember) => {
    setMembers((members) =>
      members.map((member) =>
        member.id === updatedMember.id ? updatedMember : member
      )
    );
  };

  const handleDeleteMember = (selectedMember) => {
    setMembers((members) =>
      members.filter((member) => member.id !== selectedMember.id)
    );
    setConfirm(false);
    setSelectedMember(null);
  };

  const handleConfirm = () => {
    setConfirm(!confirm);
  };

  const generateID = () => {
    let nextId = members.length + 1;
    let id =
      nextId > 99
        ? `MSB${nextId}`
        : nextId > 9
        ? `MSB0${nextId}`
        : `MSB00${nextId}`;
    members.forEach((member) => {
      if (member.id === id) {
        nextId++;
        id =
          nextId > 99
            ? `MSB${nextId}`
            : nextId > 9
            ? `MSB0${nextId}`
            : `MSB00${nextId}`;
      }
    });
    return id;
  };

  return (
    <div className="App">
      <Header />
      <Layout>
        <div className="form-update">
          <div>
            {selectedMember ? (
              <UpdateForm
                onUpdateMember={handleUpdateMember}
                onDeleteMember={handleDeleteMember}
                setSelectedMember={setSelectedMember}
                selectedMember={selectedMember}
                updateTicket={updateTicket}
                setUpdateTicket={setUpdateTicket}
                onConfirm={handleConfirm}
                confirm={confirm}
                setConfirm={setConfirm}
                confirmUpdate={confirmUpdate}
                setConfirmUpdate={setConfirmUpdate}
              />
            ) : (
              <div className="select-member">
                <h1>Select member</h1>
              </div>
            )}
          </div>
        </div>
        <div className="member-container">
          <Members
            onSelectedMember={handleSelectedMember}
            members={members}
            onPopUp={handlePopUp}
            search={search}
            setSearch={setSearch}
            selectedMember={selectedMember}
          />
        </div>
      </Layout>
      {popupIsOpen && (
        <MemberForm
          generateID={generateID}
          onPopUp={handlePopUp}
          onAddMember={handleAddMember}
        />
      )}
      <h2 className="footer">Developed by Fedry Alvindra</h2>
    </div>
  );
};

export default App;
