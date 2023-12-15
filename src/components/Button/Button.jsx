import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ content, style, className }) => {
  return (
    <Link to={'/'} className={`button ${className}`} style={style}>
      {content}
    </Link>
  );
};

Button.propTypes = {
  content: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Button;
