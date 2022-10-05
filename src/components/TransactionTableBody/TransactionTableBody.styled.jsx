import styled from 'styled-components';

export const TableBody = styled.tbody``;

export const Row = styled.tr`
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
