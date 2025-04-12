// import { useState,useEffect } from 'react'
// import { Typography, styled, Box } from "@mui/material"
// import './App.css'
// import Balance from './Components/Balance'
// import ExpenseCard from './Components/ExpenseCard'
// import NewTransactions from './Components/NewTransactions'
// import Transactions from './Components/Transactions'


// const Header = styled(Typography)`
// font-size: 35px;
// color : blue;
// text-transform : uppercase;
// `

// const Main = styled(Box)`
//   display: flex;
//   background:rgb(141, 139, 139);
//   width: 800px;
//  border-radius:20px;
//  margin:auto;
//   & > div {
//     height: 70vh;
//     width:50%; 
//     padding: 10px; 
//     overflow-y: auto; 
//   }
// `



// function App() {

//   // const [transactions, settransactions] = useState([
//   //   {id:1, text:"Momos", amount: -20},
//   //   {id:2, text:"Book", amount: -400},
//   //   {id:3, text:"Bonus", amount: 600},
//   //   {id:4, text:"Salary", amount: 3000},
//   // ])

//   const initialTransactions = JSON.parse(localStorage.getItem("transactions")) || [];

//   const [transactions, settransactions] = useState(initialTransactions);

//   // Save to localStorage whenever transactions change
//   useEffect(() => {
//     localStorage.setItem("transactions", JSON.stringify(transactions));
//   }, [transactions]);


//   return (
//     <>
//       <div className='App'>
//         <Header>Expense tracker</Header>
//         <Main>

//           <Box>
//             <Balance tranx = {transactions}/>
//             <ExpenseCard tranx = {transactions}/>
//             <NewTransactions settransactions={settransactions}/>
//           </Box>
          
//           <Box>
//             <Transactions transactions={transactions} settransactions={settransactions}/>
//           </Box>
        
//         </Main>
//       </div>
//     </>
//   )
// }

// export default App


// // we are using a array to store all the multiple transaction and sicne each of the compoennts created need that list of tranx for there individual tasks, its better that we perform all the array opr in the App.jsx itself as it is the parent component



import { useState, useEffect } from 'react'
import { Typography, Box } from "@mui/material"
import './App.css'
import Balance from './Components/Balance'
import ExpenseCard from './Components/ExpenseCard'
import NewTransactions from './Components/NewTransactions'
import Transactions from './Components/Transactions'

function App() {
  const initialTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
  const [transactions, settransactions] = useState(initialTransactions);

  // Save to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className='App'>
      <Typography variant="h4" component="h1" className="app-title">
        Expense Tracker
      </Typography>
      
      <Box className="main-container">
        <Box className="panel panel-left">
          <Balance tranx={transactions} />
          <ExpenseCard tranx={transactions} />
          <NewTransactions settransactions={settransactions} />
        </Box>
        
        
        <Box className="panel panel-right">
          <Transactions 
            transactions={transactions} 
            settransactions={settransactions} 
          />
        </Box>
      </Box>
    </div>
  )
}

export default App