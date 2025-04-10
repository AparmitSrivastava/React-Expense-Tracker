import { useState } from 'react'
import { Typography, styled, Box } from "@mui/material"
import './App.css'
import Balance from './Components/Balance'
import ExpenseCard from './Components/ExpenseCard'
import NewTransactions from './Components/NewTransactions'
import Transactions from './Components/Transactions'


const Header = styled(Typography)`
font-size: 35px;
color : blue;
text-transform : uppercase;
`

const Main = styled(Box)`
  display: flex;
  background:rgb(141, 139, 139);
  width: 800px;
 border-radius:20px;
 margin:auto;
  & > div {
    height: 70vh;
    flex: 1; 
    padding: 10px; 
    overflow-y: auto; 
  }
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
        <Main>

          <Box>
            <Balance/>
            <ExpenseCard/>
            <NewTransactions/>
          </Box>
          
          <Box>
            <Transactions transactions={transactions}/>
          </Box>
        
        </Main>
      </div>
    </>
  )
}

export default App


// we are using a array to store all the multiple transaction and sicne each of the compoennts created need that list of tranx for there individual tasks, its better that we perform all the array opr in the App.jsx itself as it is the parent component