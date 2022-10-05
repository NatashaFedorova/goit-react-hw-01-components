import PropTypes from 'prop-types';

import {
  TableBody,
  Row,
  ContainsData,
} from 'components/TransactionTableBody/TransactionTableBody.styled';

export const TransactionTableBody = ({ transactions }) => {
  return (
    <TableBody>
      {transactions.map(({ id, type, amount, currency }) => {
        return (
          <Row key={id}>
            <ContainsData>{type}</ContainsData>
            <ContainsData>{amount}</ContainsData>
            <ContainsData>{currency}</ContainsData>
          </Row>
        );
      })}
    </TableBody>
  );
};

TransactionTableBody.propType = {
  transactions: PropTypes.exact({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
