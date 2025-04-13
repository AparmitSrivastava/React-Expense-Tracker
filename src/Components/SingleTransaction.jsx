import { ListItem, ListItemText, ListItemIcon, IconButton, Typography, Box } from '@mui/material';
import { Delete } from '@mui/icons-material';

const SingleTransaction = ({ transaction, settransactions, transactions }) => {
  const deleteTransaction = (id) => {
    settransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const isIncome = transaction.amount > 0;
  
  const formattedAmount = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2
  }).format(transaction.amount);
  

  return (
    <Box 
      className={`transaction-item ${isIncome ? 'income' : 'expense'}`}
      sx={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 16px',
        borderRadius: '8px',
        marginBottom: '8px',
        borderLeft: isIncome ? '3px solid #22c55e' : '3px solid #ef4444',
        border: '1px solid #f0f0f0'
      }}
    >
      <Typography 
        variant="body1" 
        sx={{ 
          fontWeight: 500,
          color: '#333'
        }}
      >
        {transaction.text}
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography 
          variant="body1" 
          sx={{ 
            fontWeight: 600,
            color: isIncome ? '#22c55e' : '#ef4444'
          }}
        >
          {isIncome ? '+' : ''}
          {formattedAmount}
        </Typography>
        
        <IconButton 
          size="small" 
          sx={{
            color: '#6b7280',
            minWidth: '32px',
            height: '32px',
            padding: 0,
            borderRadius: '4px',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
          }}
          onClick={() => deleteTransaction(transaction.id)}
        >
          <Delete fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SingleTransaction;




