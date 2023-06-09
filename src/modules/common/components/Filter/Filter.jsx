import { nanoid } from 'nanoid';
import { FilterButton, FilterItem } from './Filter.styled';
import { filterList } from 'constants';
import { Flex, Text } from 'modules/common';

const Filter = () => {
  return (
    <Flex as="ul" display="flex" width={0}>
      {filterList.map(filter => (
        <FilterItem key={nanoid()}>
          <FilterButton type="button" className="is-active">
            <Text color="btn" fontSize={2} lineHeight={1}>
              {filter}
            </Text>
          </FilterButton>
        </FilterItem>
      ))}
    </Flex>
  );
};

export default Filter;
