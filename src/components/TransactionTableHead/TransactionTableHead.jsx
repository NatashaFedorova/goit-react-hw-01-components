import {
  HeadColumns,
  Row,
  Head,
} from 'components/TransactionTableHead/TransactionTableHead.styled';

export const TransactionTableHead = () => {
  return (
    <HeadColumns>
      <Row>
        <Head>Type</Head>
        <Head>Amount</Head>
        <Head>Currency</Head>
      </Row>
    </HeadColumns>
  );
};
