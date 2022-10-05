import PropTypes from 'prop-types';
import { Container } from 'components/Container/Container.styled';
import { SectionTransaction } from 'components/TransactionHistory/TransactionHistory.styled';
import { TransactionTable } from 'components/TransactionTable/TransactionTable';

export const TransactionHistory = ({ transactions }) => {
  return (
    <SectionTransaction>
      <Container>
        <TransactionTable transactions={transactions} />
      </Container>
    </SectionTransaction>
  );
};

TransactionHistory.propType = {
  transactions: PropTypes.array.isRequired,
};
