import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MainSection from './components/MainSection/MainSection'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">      
      <Header></Header>
      <MainSection></MainSection>
    </div>
  )
}

export default App
