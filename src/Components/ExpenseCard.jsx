import { Box, Typography } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';

const ExpenseCard = ({ tranx }) => {
  const amounts = tranx.map(transaction => transaction.amount);
  
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc + item), 0)
    .toFixed(2);
    
  const expense = (amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc + item), 0) * -1)
    .toFixed(2);
  
    const formatCurrency = (amount) => {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2
      }).format(amount);
    };
    

  return (
    <Box className="expense-card-container">
      <Box className="expense-box income">
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 0 }}>
          <TrendingUp sx={{ color: '#22c55e' }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#22c55e' }}>
            Income
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ color: '#22c55e', fontWeight: 600 }}>
          {formatCurrency(income)}
        </Typography>
      </Box>
      
      <Box className="expense-box expense">
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 1 }}>
          <TrendingDown sx={{ color: '#ef4444' }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#ef4444' }}>
            Expense
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ color: '#ef4444', fontWeight: 600 }}>
          {formatCurrency(expense)}
        </Typography>
      </Box>
    </Box>
  );
};

export default ExpenseCard;