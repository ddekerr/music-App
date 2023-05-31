import { nanoid } from "nanoid";
import { FilterList, FilterButton } from "./Filter.styled";

const filters = ["Filter1", "Filter2", "Filter3"];

function Filter() {
  return (
    <FilterList>
      {filters.map((filter) => (
        <li key={nanoid()} className="filter__item">
          <FilterButton type="button" className="is-active">
            {filter}
          </FilterButton>
        </li>
      ))}
    </FilterList>
  );
}

export default Filter;
