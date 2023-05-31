import styled from "@emotion/styled";
import bacim from "../../image/notka.png"

export const Hero = styled.div`
  background-image: url(${bacim});
  height: 500px;
  background-repeat: no-repeat;
  
`

export const Registration = styled.div`
  position: fixed;
  bottom: 0;
  padding-bottom: 40px;
  background-color: black;
  width: 100%;
`
export const Logo = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: -100px;
  align-content: center;
  display: flex;
  justify-content: center;
`

export const Picture = styled.img`
  height: 50px;
`

export const Greeting = styled.div`
  color: white;
`

export const RegistrationList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

export const RegLink = styled.a`
  color: white;
  width: 100%;
  font-size: 14px;
  line-height: 1.14;
  font-style: bold;
  text-align: center;
`

export const RegData = styled.a`
  background-color: #F92457;
  border-radius: 30px;
  padding: 10px;
  color: white;
  width: 100%;
  font-size: 14px;
  line-height: 1.14;
  font-style: bold;
  text-align: center;
`

export const RegItem = styled.li`
  :not(:last-of-type){
    margin-bottom: 20px;
  }
`
