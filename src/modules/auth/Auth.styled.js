import styled from 'styled-components';
import back from 'image/back-to-auth.jpg';

export const Hero = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${back});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Registration = styled.div`
  position: fixed;
  max-width: 400px;
  width: 100%;

  background-color: #000;

  @media screen and (max-width: 479.98px) {
    bottom: 0;
  }

  @media screen and (min-width: 480px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 50%;

    background-color: rgba(65, 65, 65, 0.74);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.8px);
  }
`;

export const Logo = styled.div`
  @media screen and (max-width: 480px) {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -100%);
  }

  align-content: center;
  display: flex;
  justify-content: center;
  padding: 20px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  background-color: #000;

  @media screen and (min-width: 480px) {
    background-color: rgba(65, 65, 65, 0.74);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.8px);
  }
`;

export const Picture = styled.img`
  height: 50px;
`;

export const Greeting = styled.p`
  color: white;
  align-self: center;
`;

export const RegistrationList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const RegLink = styled.a`
  width: 100%;
  display: block;

  color: white;

  font-size: 14px;
  line-height: 1.14;
  font-style: bold;
  text-align: center;
`;

export const RegItem = styled.li`
  min-width: 300px;
  :not(:last-of-type) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    min-width: 200px;
  }
`;
