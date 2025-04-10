import React from 'react'
import { Box, styled, Typography, Card, CardContent, TextField, Button, Divider, List } from "@mui/material"
import SingleTransaction from './SingleTransaction'

const Transactions = ({ transactions }) => {
    return (
        <Box>
            <Typography variant='h5' >Transaction History</Typography>
            <Divider />
            <List>
                {
                    transactions.map(e => {
                        return <SingleTransaction key={e.id} transaction={e}/>
                    })
                }
            </List>
        </Box>
    )
}

export default Transactions
