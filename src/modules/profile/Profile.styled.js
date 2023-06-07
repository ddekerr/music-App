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
`;
