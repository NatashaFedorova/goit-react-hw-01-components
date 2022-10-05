import styled from 'styled-components';

export const HeadColumns = styled.thead`
  background-color: #cab1b1;
`;
export const Row = styled.tr`
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
