import PropTypes from 'prop-types';
import { Box } from '../Box/Box.styled';

const Header = ({ children }) => {
  return (
    <Box as="header" pb={2} pt={2} mb={2} borderBottom={0}>
      <div className="container">{children}</div>
    </Box>
  );
};

Header.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Header;
