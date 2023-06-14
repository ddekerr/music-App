import { Box } from 'modules/common';
import { AdminMenuLink } from './AdminSidebar.styled';

const AdminSidebar = () => {
  return (
    <Box display="flex" flexDirection="column">
      <AdminMenuLink href="#">Users</AdminMenuLink>
      <AdminMenuLink href="#">Songs</AdminMenuLink>
    </Box>
  );
};

export default AdminSidebar;
