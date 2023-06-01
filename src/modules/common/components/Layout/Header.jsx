import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 15px;
  border-bottom: 0.5px solid #a0a0a0;
`;

const Header = ({ children }) => {
  return (
    <HeaderContainer>
      <div className="container">{children}</div>
    </HeaderContainer>
  );
};

Header.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Header;
