import PropTypes from 'prop-types';
import { Box } from 'modules/common';

const Header = ({ children }) => {
  return (
    <Box as="header" py="sm" mb="sm" borderBottom="light" position="relative">
      <div className="container">{children}</div>
    </Box>
  );
};

Header.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Header;
