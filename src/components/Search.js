const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by id"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <img src="assets/Search.png" alt="search" />
    </div>
  );
};

export default Search;
