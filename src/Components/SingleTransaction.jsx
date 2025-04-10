import React from 'react'
import { Box, styled, Typography, Card, CardContent, TextField, Button, Divider, List, ListItem, ListItemText } from "@mui/material"

const Detail = styled(ListItem)`
margin-top:8px;
`


const SingleTransaction = ({transaction}) => {
    const bgcolor = transaction.amount>0 ? "green" : "red"
  return (
    <Detail style={{ background: bgcolor, color: '#fff' , borderRadius:"10px" }}>
        <ListItemText>{transaction.text}</ListItemText>
        <ListItemText>{transaction.amount}</ListItemText>
    </Detail>
  )
}

export default SingleTransaction
