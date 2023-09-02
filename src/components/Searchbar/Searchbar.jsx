import { StyledSearch, SearchForm, BtnSubmit, Input } from './Searchbar.Styled';
import { BiSearchAlt } from 'react-icons/bi';

const Searchbar = ({ submit }) => {
  return (
    <StyledSearch>
      <SearchForm onSubmit={submit}>
        <Input type="text" name="query" />
        <BtnSubmit type="submit">
          <BiSearchAlt />
        </BtnSubmit>
      </SearchForm>
    </StyledSearch>
  );
};

export default Searchbar;
