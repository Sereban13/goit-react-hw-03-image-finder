import { StyledSearch, SearchForm, BtnSubmit, Input } from './Searchbar.Styled';

const Searchbar = ({ submit }) => {
  return (
    <StyledSearch>
      <SearchForm onSubmit={submit}>
        <Input type="text" name="query" />
        <BtnSubmit type="submit">Search</BtnSubmit>
      </SearchForm>
    </StyledSearch>
  );
};

export default Searchbar;
