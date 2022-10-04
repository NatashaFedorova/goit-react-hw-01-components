import {
  SectionStatistics,
  Title,
  BoxTable,
} from 'components/Statistics/Statistics.styled';

import { Container } from 'components/Container/Container.styled';
import { StatList } from 'components/StatList/StatList';

export const Statistics = ({ data }) => {
  return (
    <SectionStatistics>
      <Container>
        <BoxTable>
          <Title>Upload stats</Title>
          <StatList data={data} />
        </BoxTable>
      </Container>
    </SectionStatistics>
  );
};
