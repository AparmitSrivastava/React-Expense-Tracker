import { Typography, Box } from '@mui/material';
import { AccountBalanceWallet } from '@mui/icons-material';

const Balance = ({ tranx }) => {
  const amount = tranx.map(transaction => transaction.amount);
  const total = amount.reduce((accumulator, item) => (accumulator + item), 0).toFixed(2);
  
  const formattedTotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2
  }).format(total);
  
  return (
    <Box className="balance-container">
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 0 , mt:0 }}>
        <AccountBalanceWallet />
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Your Balance
        </Typography>
      </Box>
      <Typography variant="h4" sx={{ fontWeight: 700 , mb:2 }}>
        {formattedTotal}
      </Typography>
    </Box>
  );
};

export default Balance;





// import React from 'react'
// import {Box, styled, Typography} from "@mui/material"
// // import { amET } from '@mui/material/locale';

// const BalanceText = styled(Typography)`
// font-size:20px

// `

// const Balance = ({tranx}) => {

//     const amount = tranx.map(e=> e.amount); //amount contains the values
//     const total = amount.reduce((acc, item) => {
//         return acc + item;
//       }, 0).toFixed(2); //reduce takes 2 values- a callback func and a initial value
//   return (
//     <Box>
//       <BalanceText>Balance : ₹{total}</BalanceText>
//     </Box>
//   )
// }

// export default Balance