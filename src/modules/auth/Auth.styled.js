import styled from 'styled-components';
import back from 'image/back-to-auth.jpg';

// ############### BACKGROUND ###################
export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${back});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
// ############### REGISTRATION ###################
export const Registration = styled.div`
  position: fixed;
  width: 100%;
  max-width: 768px;

  background-color: rgba(65, 65, 65, 0.74);
  backdrop-filter: blur(5.8px);

  @media screen and (max-width: 479.98px) {
    bottom: 0;
  }

  @media screen and (min-width: 480px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 80%;

    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
  @media screen and (min-width: 7680px) {
    width: 50%;
  }
`;
// ############### LOGO ###################
export const Logo = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 20px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  background-color: rgba(65, 65, 65, 0.74);
  backdrop-filter: blur(5.8px);
  color: #fff;

  font-size: 24px;

  @media screen and (max-width: 479.98px) {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -100%);
    font-size: 16px;
  }

  @media screen and (min-width: 480px) {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const Picture = styled.img`
  height: 50px;
`;

export const Greeting = styled.p`
  align-self: center;
  text-align: center;
`;

// ############### REGISTRATION LIST ###################
export const RegistrationList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

// ############### REG ITEM ###################
export const RegItem = styled.li`
  width: 100%;

  :not(:last-of-type) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 480px) {
    min-width: 200px;
    width: 50%;
  }
`;
