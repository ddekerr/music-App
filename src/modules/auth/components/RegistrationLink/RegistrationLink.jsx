import { RegistratioLinkContainer } from './RegistrationLink.styled';

const RegistrationLink = ({
  link: { href, text, icon: Icon, isBtn },
  click,
}) => {
  return (
    <RegistratioLinkContainer
      to={href}
      className={isBtn ? 'reg-button' : ''}
      onClick={() => click}
    >
      {Icon && <Icon style={{ marginRight: '10px' }} />}
      <span>{text}</span>
    </RegistratioLinkContainer>
  );
};

export default RegistrationLink;
