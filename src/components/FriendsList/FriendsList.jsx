import PropTypes from 'prop-types';

import { CardFriend } from 'components/CardFriend/CardFriend';
import { List, Item } from 'components/FriendsList/FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <Item key={friend.id}>
            <CardFriend friend={friend} />
          </Item>
        );
      })}
    </List>
  );
};

CardFriend.propType = {
  friends: PropTypes.array.isRequired,
};
