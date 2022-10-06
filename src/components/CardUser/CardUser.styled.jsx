import styled from 'styled-components';

export const Card = styled.div`
  border-radius: ${props => props.theme.radii.normal};
  box-shadow: 2px -1px 17px 0px rgba(71, 71, 71, 0.75);
`;
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
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  border-top: ${props => `1px solid ${props.theme.colors.grey}`};
`;

export const Item = styled.li`
  padding: ${props => props.theme.spacing(5)} 0;
  width: calc(100% / 3);
  color: ${props => props.theme.colors.grey};
  background-color: #ebe2e2;
  display: flex;
  align-items: center;
  flex-direction: column;
  &:not(:last-child) {
    border-right: ${props => `1px solid ${props.theme.colors.grey}`};
  }
  &:first-child {
    border-bottom-left-radius: ${props => props.theme.radii.normal};
  }
  &:last-child {
    border-bottom-right-radius: ${props => props.theme.radii.normal};
  }
`;

export const TypeStatData = styled.span`
  font-weight: ${props => props.theme.fontWeight.bolt};
  font-size: ${props => props.theme.fontSizes.small};
`;

export const StatValue = styled.span`
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.small};
`;
