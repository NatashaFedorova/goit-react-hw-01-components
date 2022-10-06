import styled from 'styled-components';

export const SectionStatistics = styled.section`
  margin: 0;
  padding: ${props => props.theme.spacing(5)} 0;
`;

export const BoxTable = styled.div`
  border-radius: ${props => props.theme.radii.normal};
  box-shadow: 2px -1px 17px 0px rgba(71, 71, 71, 0.75);
`;

export const Title = styled.h2`
  margin: 0;
  padding: ${props => props.theme.spacing(8)} 0;
  font-size: ${props => props.theme.fontSizes.medium};
  text-transform: uppercase;
  text-align: center;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  border-radius: ${props => props.theme.radii.normal};
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
  &:first-child {
    border-bottom-left-radius: ${props => props.theme.radii.normal};
  }
  &:last-child {
    border-bottom-right-radius: ${props => props.theme.radii.normal};
  }

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
