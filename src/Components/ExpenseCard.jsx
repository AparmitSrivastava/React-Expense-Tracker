import React from 'react'
import { Box, styled, Typography, Card, CardContent } from "@mui/material"

const Container = styled(Box)`
display:flex;
width:100%;
& > div {
  flex: 1;  
  padding:10px;
}
`

const ExpenseCard = () => {
  return (
    <Container>
      <Card>
        <CardContent>
          <Typography>Income</Typography>
          <Typography style={{ color: "green" }}>25</Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography>Expense</Typography>
          <Typography style={{ color: "red" }}>15</Typography>
        </CardContent>
      </Card>

    </Container>
  )
}

export default ExpenseCard
