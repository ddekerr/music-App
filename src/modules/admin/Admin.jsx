import { Box, Flex } from 'modules/common';

const Admin = () => {
  return (
    <Flex display="flex">
      <Box as="aside">Aside</Box>
      <Box as="main">Main</Box>
    </Flex>
  );
};

export default Admin;
