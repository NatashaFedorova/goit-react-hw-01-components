import PropTypes from 'prop-types';

import { Description } from 'components/Description/Description';
import { Statistic } from 'components/Statistic/Statistic';

export const Profile = ({ user, theme }) => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;

  return (
    <>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Statistic followers={followers} views={views} likes={likes} />
    </>
  );
};

Profile.propType = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
