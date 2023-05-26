import styled from "@emotion/styled";


export const FilterContainer = styled.div`

`;

export const FilterList = styled.ul`
  flex-basis: 100%;
  display: flex;
  gap: 25px;

  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const FilterItem = styled.li`

`;

export const FilterButton = styled.button`
  padding: 10px;
  border: 0;
  border-radius: 10px;
  background-color: #e5e5e5;
  color: #505050;
  font-size: 18px;
  line-height: 1.16;
`;