import MemberList from "./MemberList";
import Button from "./Button";
import Search from "./Search";

const Members = ({
  selectedMember,
  onSelectedMember,
  members,
  onPopUp,
  search,
  setSearch,
}) => {
  return (
    <div className="animate__animated animate__fadeInUp member-list">
      <Search search={search} setSearch={setSearch} />
      {members.length > 0 ? (
        <MemberList
          onSelectedMember={onSelectedMember}
          members={members}
          search={search}
          selectedMember={selectedMember}
        />
      ) : (
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ marginRight: "3em" }}>No data</p>
        </ul>
      )}
      <Button className={"add-member"} onEvent={onPopUp}>
        Add New Member
      </Button>
    </div>
  );
};

export default Members;
