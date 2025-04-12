
import { Box, Typography, IconButton } from '@mui/material';
import { Delete, ReceiptLong } from '@mui/icons-material';

const Transactions = ({ transactions, settransactions }) => {
  const deleteTransaction = (id) => {
    settransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 600 }} className="transaction-list-title">
        Transaction History
      </Typography>
      
      {transactions.length === 0 ? (
        <Box className="empty-state">
          <ReceiptLong className="empty-state-icon" />
          <Typography variant="body1">No transactions yet</Typography>
          <Typography variant="body2" sx={{ mt: 1, color: '#9ca3af' }}>
            Add a new transaction to get started
          </Typography>
        </Box>
      ) : (
        <Box>
          {transactions.map(transaction => (
            <Box 
              key={transaction.id} 
              className={`transaction-item ${transaction.amount > 0 ? 'income' : 'expense'}`}
            >
              <Typography 
                variant="body1" 
                className="transaction-text"
              >
                {transaction.text}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography 
                  variant="body1" 
                  className={`transaction-amount ${transaction.amount > 0 ? 'income' : 'expense'}`}
                >
                  {transaction.amount > 0 ? '+' : ''}
                  {new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR'
}).format(transaction.amount)}

                </Typography>
                
                <IconButton 
                  size="small" 
                  className="delete-button"
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  <Delete fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Transactions;