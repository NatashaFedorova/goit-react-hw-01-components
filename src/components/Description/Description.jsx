import { Box, AvatarUser, UserName, AboutUser } from './Description.styled';

export const Description = ({ username, tag, location, avatar }) => {
  return (
    <Box>
      <AvatarUser src={avatar} alt="User avatar" />
      <UserName>{username}</UserName>
      <AboutUser>@{tag}</AboutUser>
      <AboutUser>{location}</AboutUser>
    </Box>
  );
};
