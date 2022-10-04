import users from '../users.json';
import { Box } from 'components/Box/Box.styled';
import { ListProfiles } from 'components/ListProfiles/ListProfiles';

export const App = () => {
  return (
    <Box>
      <ListProfiles users={users} />
    </Box>
  );
};
