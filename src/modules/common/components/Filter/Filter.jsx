import { nanoid } from 'nanoid';
import { FilterList, FilterButton, FilterItem } from './Filter.styled';
import { filterList } from 'constants';

const Filter = () => {
  return (
    <FilterList>
      {filterList.map(filter => (
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
