import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: ${props => props.theme.spacing(5)} 0;

  list-style: none;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(5)};
`;

export const Item = styled.li`
  width: calc(100% / 3);
  border-radius: ${props => props.theme.radii.normal};
  box-shadow: 2px -1px 17px 0px rgba(71, 71, 71, 0.75);
`;
