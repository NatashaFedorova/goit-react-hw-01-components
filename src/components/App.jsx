import user from '../database/users.json';
import data from '../database/data.json';
import friends from '../database/friends.json';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
    </>
  );
};
