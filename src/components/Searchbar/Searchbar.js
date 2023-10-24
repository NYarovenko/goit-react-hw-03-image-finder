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
      <StyledForm
        onSubmit={evt => {
          evt.preventDefault();
          const form = evt.currentTarget;
          const query = form.elements.query.value;
          return onSearchExpression(query);
        }}
      >
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
