import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  margin: 0;
  padding: ${props => props.theme.spacing(8)};
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.medium};
  border-radius: ${props => props.theme.radii.normal};
  box-shadow: 2px -1px 17px 0px rgba(71, 71, 71, 0.75);

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(5)};
  }
`;
