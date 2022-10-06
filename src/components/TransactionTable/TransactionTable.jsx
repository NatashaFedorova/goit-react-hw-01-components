import PropTypes from 'prop-types';

import {
  Table,
  TableBody,
  RowHeads,
  ContainsData,
  HeadColumns,
  RowBody,
  Head,
} from 'components/TransactionTable/TransactionTable.styled';

export const TransactionTable = ({ transactions }) => {
  return (
    <Table>
      <HeadColumns>
        <RowHeads>
          <Head>Type</Head>
          <Head>Amount</Head>
          <Head>Currency</Head>
        </RowHeads>
      </HeadColumns>
      <TableBody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <RowBody key={id}>
              <ContainsData>{type}</ContainsData>
              <ContainsData>{amount}</ContainsData>
              <ContainsData>{currency}</ContainsData>
            </RowBody>
          );
        })}
      </TableBody>
    </Table>
  );
};

TransactionTable.propType = {
  transactions: PropTypes.exact({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
