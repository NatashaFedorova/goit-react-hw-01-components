import {
  SectionStatistics,
  Title,
  BoxTable,
  List,
  Item,
  TypeDoc,
  Res,
} from 'components/Statistics/Statistics.styled';

import { Container } from 'components/Container/Container.styled';

export const Statistics = ({ data }) => {
  return (
    <SectionStatistics>
      <Container>
        <BoxTable>
          <Title>Upload stats</Title>
          <List>
            {data.map(({ id, label, percentage }) => (
              <Item key={id} label={label} lengthList={data.length}>
                <TypeDoc>{label}</TypeDoc>
                <Res>{percentage}%</Res>
              </Item>
            ))}
          </List>
        </BoxTable>
      </Container>
    </SectionStatistics>
  );
};
