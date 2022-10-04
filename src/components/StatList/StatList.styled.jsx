import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  margin: 0;
  padding: ${props => props.theme.spacing(5)} 0;
  background-color: grey;
  width: calc(100% / ${props => props.lengthList});
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.small};

  background-color: ${props =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`};
`;
export const TypeDoc = styled.span`
  font-weight: ${props => props.theme.fontWeight.mediumPlus};
  margin-bottom: 8px;
`;
export const Res = styled.span`
  font-weight: ${props => props.theme.fontWeight.mediumPlus};
`;
