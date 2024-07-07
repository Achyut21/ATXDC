import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col'>
      <a> Hello World</a>
      <Button variant="destructive">Yes Click Me</Button>
    </div>
    <Badge variant="outline">Badge</Badge>

    
    </>
  )
}

export default App
