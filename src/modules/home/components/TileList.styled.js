import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TileListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const TileItemContainer = styled.li`
  flex-basis: calc((100% - 10px) / 2);

  :nth-of-type(2n + 1) {
    margin-right: 10px;
  }

  :not(:nth-last-of-type(-n + 2)) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 480px) {
    flex-basis: calc((100% - 20px) / 3);

    :nth-of-type(3n) {
      margin-right: 10px;
    }

    :not(:nth-last-of-type(-n + 3)) {
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 30px) / 4);

    :nth-of-type(4n + 1) {
      margin-right: 10px;
    }

    :not(:nth-last-of-type(-n + 4)) {
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 50px) / 6);

    :nth-of-type(6n + 1) {
      margin-right: 10px;
    }

    :not(:nth-last-of-type(-n + 6)) {
      margin-bottom: 10px;
    }
  }
`;

export const TileLinkName = styled.p`
  margin-top: 5px;

  color: white;

  font-size: 18px;
  line-height: 1.16;
  font-weight: 500;
  text-align: center;
`;

export const TileLink = styled(NavLink)``;
