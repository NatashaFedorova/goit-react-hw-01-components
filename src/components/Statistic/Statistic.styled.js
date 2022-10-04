import styled from 'styled-components';

export const StatList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  border-top: ${props => `1px solid ${props.theme.colors.grey}`};
`;

export const StatItem = styled.li`
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
`;

export const TypeStatData = styled.span`
  font-weight: 700;
`;

export const StatData = styled.span`
  font-weight: 500;
`;
