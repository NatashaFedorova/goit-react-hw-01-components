import PropTypes from 'prop-types';

import { StatList, StatItem, TypeStatData, StatData } from './Statistic.styled';

export const Statistic = ({ followers, views, likes }) => {
  return (
    <StatList>
      <StatItem>
        <TypeStatData>Followers</TypeStatData>
        <StatData>{followers}</StatData>
      </StatItem>
      <StatItem>
        <TypeStatData>Views</TypeStatData>
        <StatData>{views}</StatData>
      </StatItem>
      <StatItem>
        <TypeStatData>Likes</TypeStatData>
        <StatData>{likes}</StatData>
      </StatItem>
    </StatList>
  );
};

StatList.propType = {
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
