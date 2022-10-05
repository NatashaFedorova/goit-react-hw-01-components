// import PropTypes from 'prop-types';
import { TransactionTableHead } from 'components/TransactionTableHead/TransactionTableHead';
import { TransactionTableBody } from 'components/TransactionTableBody/TransactionTableBody';

import { Table } from 'components/TransactionTable/TransactionTable.styled';

export const TransactionTable = ({ transactions }) => {
  return (
    <Table>
      <TransactionTableHead />
      <TransactionTableBody transactions={transactions} />
    </Table>
  );
};
