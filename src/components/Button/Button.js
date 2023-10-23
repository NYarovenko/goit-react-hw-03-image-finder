import { StyledButtom } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return <StyledButtom onClick={onLoadMore}>Load more</StyledButtom>;
};
