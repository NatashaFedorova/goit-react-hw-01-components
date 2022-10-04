import PropTypes from 'prop-types';

import { Status, Img, Name } from './CardFriend.styled';

export const CardFriend = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <>
      <Status status={isOnline} />
      <Img src={avatar} alt={'User avatar'} width={48} />
      <Name>{name}</Name>
    </>
  );
};

CardFriend.propType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isOnline,
};
