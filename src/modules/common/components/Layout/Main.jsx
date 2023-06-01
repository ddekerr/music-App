import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainContainer = styled.main`
  padding-bottom: 70px;
`;

const Main = ({ children }) => {
  return (
    <MainContainer>
      <div className="container">{children}</div>
    </MainContainer>
  );
};

Main.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Main;
