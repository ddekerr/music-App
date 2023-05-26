import { nanoid } from "nanoid";
import { FilterContainer, FilterButton } from "./Filter.styled";

const filters = ["Filter1", "Filter2", "Filter3"];

function Filter() {
  return (
    <FilterContainer>
      <ul className="filter__list">
        {filters.map((filter) => (
          <li key={nanoid()} className="filter__item">
            <FilterButton type="button" className="is-active">
              {filter}
            </FilterButton>
          </li>
        ))}
      </ul>
    </FilterContainer>
  );
}

export default Filter;
