import PropTypes from 'prop-types';
import { ButtonBox } from './Button.styled';

function Button({ onLoadMore }) {
  return (
    <ButtonBox type="button" onClick={onLoadMore}>
      Load more
    </ButtonBox>
  );
}

Button.propTypes = { onLoadMore: PropTypes.func.isRequired };

export default Button;
