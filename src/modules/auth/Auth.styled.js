import styled from 'styled-components';
import back from 'image/back-to-auth.jpg';

export const Hero = styled.div`
  width: 100vw;
  height: 75vh;
  background-image: url(${back});
  background-position: center -100px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Registration = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;

  background-color: #000;
`;
export const Logo = styled.div`
  position: absolute;
  left: 50%;
  top: -80px;
  transform: translate(-50%, 0);

  align-content: center;
  display: flex;
  justify-content: center;
  padding: 20px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  background-color: #000;
`;

export const Picture = styled.img`
  height: 50px;
`;

export const Greeting = styled.div`
  color: white;
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
`;
