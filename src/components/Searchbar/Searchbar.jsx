const Searchbar = ({ submit }) => {
  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Searchbar;
