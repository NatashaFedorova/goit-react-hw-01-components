import PropTypes from 'prop-types';

import { Card } from 'components/CardUser/CardUser.styled';
import { Description } from 'components/Description/Description';
import { StatUser } from 'components/StatUser/StatUser';

export const CardUser = ({ user }) => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;

  return (
    <Card>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <StatUser followers={followers} views={views} likes={likes} />
    </Card>
  );
};

CardUser.propType = {
  user: PropTypes.object.isRequired,
};

Description.propType = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

StatUser.propType = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
