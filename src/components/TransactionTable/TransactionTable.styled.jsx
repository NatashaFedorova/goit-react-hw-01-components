import styled from 'styled-components';

export const Table = styled.table`
  color: ${props => props.theme.colors.grey};
  border-collapse: collapse;
  width: 100%;
  border-radius: 4px;
  box-shadow: 2px -1px 17px 0px rgb(71 71 71 / 75%);
`;

export const HeadColumns = styled.thead`
  background-color: #cab1b1;
`;
export const RowHeads = styled.tr`
  &:first-child {
    border-top-left-radius: ${props => props.theme.radii.normal};
  }
  &:last-child {
    border-top-right-radius: ${props => props.theme.radii.normal};
  }

  background-color: #cab1b1;
`;
export const Head = styled.th`
  text-align: center;
  width: calc(100% / 3);
  padding: ${props => props.theme.spacing(5)} 0;
  font-size: ${props => props.theme.fontSizes.medium};
  &:first-child {
    border-top-left-radius: ${props => props.theme.radii.normal};
  }
  &:last-child {
    border-top-right-radius: ${props => props.theme.radii.normal};
  }

  &:not(:last-child) {
    border-right: 1px solid #ffffff;
  }
`;
export const TableBody = styled.tbody``;

export const RowBody = styled.tr`
  &:nth-child(odd) td:not(:last-child) {
    border-right: 1px solid #ebe2e2;
  }

  &:nth-child(even) td:not(:last-child) {
    border-right: 1px solid #fff;
  }

  &:nth-child(even) {
    background-color: #ebe2e2;
  }
`;

export const ContainsData = styled.td`
  padding: ${props => props.theme.spacing(5)} 0;
  text-align: center;
  font-weight: ${props => props.theme.fontWeight.medium};
`;
