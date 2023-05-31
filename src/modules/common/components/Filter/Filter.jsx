import { nanoid } from 'nanoid';
import { FilterList, FilterButton, FilterItem } from './Filter.styled';

const filters = ['Filter1', 'Filter2', 'Filter3'];

const Filter = () => {
  return (
    <FilterList>
      {filters.map(filter => (
        <FilterItem key={nanoid()}>
          <FilterButton type="button" className="is-active">
            {filter}
          </FilterButton>
        </FilterItem>
      ))}
    </FilterList>
  );
};

export default Filter;
