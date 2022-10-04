import styled from 'styled-components';

export const SectionStatistics = styled.section`
  margin: 0;
  padding: ${props => props.theme.spacing(5)} 0;
`;

export const Title = styled.h2`
  padding: ${props => props.theme.spacing(8)} 0;
  font-size: ${props => props.theme.fontSizes.medium};
  text-transform: uppercase;
  text-align: center;
`;

export const BoxTable = styled.div`
  border-radius: ${props => props.theme.radii.normal};
  box-shadow: 2px -1px 17px 0px rgba(71, 71, 71, 0.75);
`;