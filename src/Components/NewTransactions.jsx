import React from 'react'
import { Box, styled, Typography, Card, CardContent, TextField ,Button } from "@mui/material"

const Cont = styled(Box)`
display:flex;
flex-direction:column;
& > h5 , & > div , & > button{
margin-top:30px
}
`

const NewTransactions = () => {
  return (
    <Cont>
      <Typography variant='h5'>New Transaction</Typography>
      <TextField label="Enter expense"/>
      <TextField label="Enter amount"/>
      <Button variant='contained'>Add transaction </Button>
    </Cont>
  )
}

export default NewTransactions
