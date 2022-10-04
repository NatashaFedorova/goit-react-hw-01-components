import { List, Item, TypeDoc, Res } from 'components/StatList/StatList.styled';

export const StatList = ({ data }) => {
  return (
    <List>
      {data.map(({ id, label, percentage }) => (
        <Item key={id} label={label} lengthList={data.length}>
          <TypeDoc>{label}</TypeDoc>
          <Res>{percentage}%</Res>
        </Item>
      ))}
    </List>
  );
};
