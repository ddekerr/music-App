import styled from 'styled-components';


export const AvatarFoto = styled.img`
  height: 100px;
  border-radius: 30px;
  margin-right: 15px;

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    height: 150px;
  }

  @media screen and (min-width: 1280px) {
    height: 300px;
  }
`;

export const UserName = styled.p`
  font-size: 35px;
  font-weight: 700;
  color: white;
  flex-grow: 1;

  @media screen and (min-width:480px){
    flex-grow: 1;
  }
  `;

export const MenuBurger = styled.button`
  @media screen and (min-width:480px){
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;

