import { useState } from 'react'
import { Typography, styled, Box } from "@mui/material"
import './App.css'
import Balance from './Components/Balance'
import ExpenseCard from './Components/ExpenseCard'
import NewTransactions from './Components/NewTransactions'
import Transaction from './Components/Transaction'


const Header = styled(Typography)`
font-size: 36px;
color : blue;
text-transform : uppercase;
`

function App() {

  const [transactions, settransactions] = useState([
    {id:1, text:"Momos", amount: -20},
    {id:2, text:"Book", amount: -400},
    {id:3, text:"Bonus", amount: 600},
    {id:4, text:"Salary", amount: 3000},
    
  ])
  return (
    <>
      <div className='App'>
        <Header>Expense tracker</Header>
        <Box>

          <Box>
            <Balance/>
            <ExpenseCard/>
            <NewTransactions/>
          </Box>
          
          <Box>
            <Transaction transactions={transactions}/>
          </Box>
        
        </Box>
      </div>
    </>
  )
}

export default App


// we are using a array to store all the multiple transaction and sicne each of the compoennts created need that list of tranx for there individual tasks, its better that we perform all the array opr in the App.jsx itself as it is the parent component