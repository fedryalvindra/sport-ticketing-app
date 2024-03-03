import Member from "./Member";

const MemberList = ({ onSelectedMember, selectedMember, members, search }) => {
  const filteredMember = members.filter((member) =>
    member?.id.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <ul>
      {filteredMember.map((member) => (
        <Member
          onSelectedMember={onSelectedMember}
          member={member}
          selectedMember={selectedMember}
          key={member.id}
        />
      ))}
    </ul>
  );
};

export default MemberList;
