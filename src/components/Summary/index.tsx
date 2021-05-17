import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../hooks/TransactionsContext';
import { Container } from './styles';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const TotalDeposits = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      return acc + transaction.amount;
    }

    return acc;
  }, 0);

  const TotalWithdraw = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'withdraw') {
      return acc + transaction.amount;
    }

    return acc;
  }, 0);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(TotalDeposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(-TotalWithdraw)}
        </strong>
      </div>
      <div className="highlight">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(TotalDeposits - TotalWithdraw)}
        </strong>
      </div>
    </Container>
  );
}
