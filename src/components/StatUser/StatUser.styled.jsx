import styled from 'styled-components';

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
