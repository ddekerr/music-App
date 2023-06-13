import PropTypes from 'prop-types';
import { Box } from 'modules/common';

const Main = ({ children }) => {
  return (
    <Box as="main" pb={{ _: 'sm', tablet: 'zero' }}>
      <div className="container">{children}</div>
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Main;
