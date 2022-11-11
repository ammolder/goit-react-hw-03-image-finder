import PropTypes from 'prop-types';
import { Button } from './ Button.styled';

export const LoadMore = ({ buttonClick }) => {
  return (
    <Button type="submit" onClick={buttonClick}>
      Load more
    </Button>
  );
};
Button.propTypes = {
  buttonClick: PropTypes.func,
};
