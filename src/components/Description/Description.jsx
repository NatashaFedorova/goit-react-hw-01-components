import { Box, Img, Name, Info } from './Description.styled';

export const Description = ({ username, tag, location, avatar }) => {
  return (
    <Box>
      <Img src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Info>@{tag}</Info>
      <Info>{location}</Info>
    </Box>
  );
};
