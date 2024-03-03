const Member = ({ onSelectedMember, member, selectedMember }) => {
  return (
    <li
      className={`member ${selectedMember?.id === member.id ? "selected" : ""}`}
      onClick={() => onSelectedMember(member)}
    >
      <img src="assets/Profile.jpg" alt="profile" />
      <div>
        <p className="id">{member.id}</p>
        <h3>{member.name}</h3>
        {member.ticket <= 0 && <p>Has no ticket</p>}
        {member.ticket === 1 && <p>Has {member.ticket} sport ticket</p>}
        {member.ticket > 1 && <p>Has {member.ticket} sport tickets</p>}
      </div>
    </li>
  );
};

export default Member;
