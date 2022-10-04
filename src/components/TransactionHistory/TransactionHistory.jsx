import PropTypes from 'prop-types';
import { Container } from 'components/Container/Container.styled';
import { SectionTransaction } from 'components/TransactionHistory/TransactionHistory.styled';
// import { TransHistoryList } from 'components/TransHistoryList/TransHistoryList';

export const TransactionHistory = ({ transactions }) => {
  return (
    <SectionTransaction>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Invoice</td>
              <td>125</td>
              <td>USD</td>
            </tr>
            <tr>
              <td>Withdrawal</td>
              <td>85</td>
              <td>USD</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </SectionTransaction>
  );
};

TransactionHistory.propType = {
  transactions: PropTypes.array.isRequired,
};
