import styled from 'styled-components';

export const Status = styled.span`
  width: 30px;
  height: 30px;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props => (props.status ? 'green' : 'tomato')};
  margin-right: ${props => props.theme.spacing(5)};
`;
export const Img = styled.img`
  margin-right: ${props => props.theme.spacing(5)};
`;
export const Name = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeight.medium};
  color: ${props => props.theme.colors.grey};
`;
