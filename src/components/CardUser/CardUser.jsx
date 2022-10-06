import PropTypes from 'prop-types';

import {
  Card,
  Box,
  Img,
  Name,
  Info,
  List,
  Item,
  TypeStatData,
  StatValue,
} from 'components/CardUser/CardUser.styled';

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
      <Box>
        <Img src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Box>
      <List>
        <Item>
          <TypeStatData>Followers</TypeStatData>
          <StatValue>{followers}</StatValue>
        </Item>
        <Item>
          <TypeStatData>Views</TypeStatData>
          <StatValue>{views}</StatValue>
        </Item>
        <Item>
          <TypeStatData>Likes</TypeStatData>
          <StatValue>{likes}</StatValue>
        </Item>
      </List>
    </Card>
  );
};

CardUser.propType = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
