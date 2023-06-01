import PropTypes from 'prop-types';
import { Box } from 'modules/common';

const Main = ({ children }) => {
  return (
    <Box as="main" pb={{ _: 4, tablet: 0 }}>
      <div className="container">{children}</div>
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Main;
