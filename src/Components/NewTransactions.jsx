import { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';

const NewTransactions = ({ settransactions }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const addTransaction = (e) => {
    e.preventDefault();
    
    if (text.trim() === '' || amount === '') {
      setError('Please fill in all fields');
      setTimeout(() => setError(''), 3000);
      return;
    }
    
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount // Convert string to number
    };

    settransactions(prevTransactions => [newTransaction, ...prevTransactions]);
    
    // Reset form
    setText('');
    setAmount('');
  };

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 , color:"black" }}>
        Add New Transaction
      </Typography>
      
      {error && (
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'error.main', 
            textAlign: 'center', 
            mb: 2,
            p: 1,
            bgcolor: '#fef2f2',
            borderRadius: 1
          }}
        >
          {error}
        </Typography>
      )}
      
      <form onSubmit={addTransaction}>
        <TextField
          label="Transaction Title"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
          variant="outlined"
          size="small"
          className="form-input"
          placeholder="Enter description"
          sx={{ mb: 2 }}
        />
        
        <TextField
          label="Amount"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          variant="outlined"
          size="small"
          className="form-input"
          placeholder="Enter amount (negative for expense)"
          type="number"
          helperText="Use negative values (-) for expenses"
          sx={{ mb: 2 }}
        />
        
        <Button 
          variant="contained" 
          fullWidth 
          type="submit"
          className="submit-button"
          startIcon={<AddCircleOutline />}
        >
          Add Transaction
        </Button>
      </form>
    </Box>
  );
};

export default NewTransactions;

















// import React from 'react'
// import { Box, styled, Typography, Card, CardContent, TextField ,Button } from "@mui/material"
// import { useState } from 'react'

// const Cont = styled(Box)`
// display:flex;
// flex-direction:column;
// & > h5 , & > div , & > button{
// margin-top:20px
// }
// `

// const NewTransactions = ({settransactions}) => {

//     const [text, settext] = useState('')
//     const [amt, setamt] = useState('')
//     const addTransaction = ()=>{
//         let transaction = {
//             id: Math.floor(Math.random()*10000),
//             text:text,
//             amount:+amt //we wrote + because the input field returns a string and by adding + we make it a number
//         }
//         settransactions(prevstate => [transaction, ...prevstate])
//         settext('')        //clear the text field
//         setamt('')  
//     }
//   return (
//     <Cont>
//       <Typography variant='h5'>New Transaction</Typography>
//       <TextField label="Enter expense" onChange={e=>settext(e.target.value)} value={text} />
//       <TextField label="Enter amount" onChange={e=>setamt(e.target.value)} type='number' value={amt} />
//       <Button variant='contained' onClick={()=>addTransaction()}>Add transaction </Button>
//     </Cont>
//   )
// }

// export default NewTransactions
