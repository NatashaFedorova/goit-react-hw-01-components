import styled from 'styled-components';

export const Box = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing(8)};
`;

export const Img = styled.img`
  width: 150px;
  border-radius: ${props => props.theme.radii.round};
`;

export const Name = styled.h3`
  color: ${props => props.theme.colors.grey};
  font-size: ${props => props.theme.fontSizes.large};
`;

export const Info = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeight.medium};
  color: ${props => props.theme.colors.grey};
`;
