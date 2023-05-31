import styled from "@emotion/styled";

export const SongItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #fff;
  font-family: Roboto;

  :not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const SongTitle = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.14;
`;

export const SongAuthor = styled.p`
  font-size: 10px;
  line-height: 1.14;
  font-weight: 400;
`;

export const ActionButton = styled.button`
  border: 0;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
`;
