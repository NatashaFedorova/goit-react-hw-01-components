import PropTypes from 'prop-types';
import { List, Item } from './ListProfiles.styled';
import { Profile } from 'components/Profile/Profile';

export const ListProfiles = ({ users }) => {
  return (
    <List>
      {users.map((user, idx) => (
        <Item key={idx}>
          <Profile user={user} />
        </Item>
      ))}
    </List>
  );
};
ListProfiles.propType = {
  users: PropTypes.array.isRequired,
};
