import styled from 'styled-components';

export const Box = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing(8)};
`;

export const AvatarUser = styled.img`
  width: 150px;
  border-radius: ${props => props.theme.radii.round};
`;

export const UserName = styled.h3`
  color: ${props => props.theme.colors.grey};
`;

export const AboutUser = styled.p`
  font-weight: 500;
  color: ${props => props.theme.colors.grey};
`;
// 
