import { List, Item, TypeStatData, StatValue } from './StatUser.styled';

export const StatUser = ({ followers, views, likes }) => {
  return (
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
  );
};
