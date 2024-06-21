import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col'>
      <a> Hello World</a>
      <Button variant="destructive">Click Me</Button>
    </div>
    
    </>
  )
}

export default App
