import { Box, Flex } from 'modules/common';
import { AdminSidebar, AdminSheets } from './components';
import { LogoLink, LogoPosition, ColorBack } from './Admin.styled';
import { Logo } from 'modules/common';

const Admin = () => {
  return (
    <Flex display="flex">
      <ColorBack>
        <LogoLink href="#">
          <LogoPosition>
            <Logo />
          </LogoPosition>
        </LogoLink>

        <AdminSidebar />
      </ColorBack>
      <Box as="main">
        <AdminSheets />
      </Box>
    </Flex>
  );
};

export default Admin;
