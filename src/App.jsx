import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Typography , styled} from "@mui/material"
import './App.css'

const Header = styled(Typography)`
font-size: 40px
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Header> Expense tracker </Header>
      </div>
      </>
  )
}

export default App
