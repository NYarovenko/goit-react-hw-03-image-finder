import {
  StyledSearchbar,
  StyledForm,
  StyledFormButton,
  StyledFormButtonLabel,
  StyledFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSearchExpression }) => {
  return (
    <StyledSearchbar>
      <StyledForm onSubmit={onSearchExpression}>
        <StyledFormButton type="submit">
          <StyledFormButtonLabel>Search</StyledFormButtonLabel>
        </StyledFormButton>

        <StyledFormInput
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledSearchbar>
  );
};
