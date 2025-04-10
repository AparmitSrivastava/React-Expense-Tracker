import React from 'react'
import { Box, styled, Typography, Card, CardContent, TextField ,Button , Divider, List } from "@mui/material"

const Transaction = ({transactions}) => {
  return (
    <Box>
      <Typography variant='h5'>Transaction History</Typography>
      <Divider/>
      <List>

      </List>
    </Box>
  )
}

export default Transaction
