import PropTypes from 'prop-types';
import { Container } from 'components/Container/Container.styled';
import { SectionFriends } from 'components/Friends/Friends.styled';
import { FriendsList } from 'components/FriendsList/FriendsList';

export const Friends = ({ friends }) => {
  return (
    <SectionFriends>
      <Container>
        <FriendsList friends={friends} />
      </Container>
    </SectionFriends>
  );
};
Friends.propType = {
  friends: PropTypes.array.isRequired,
};
