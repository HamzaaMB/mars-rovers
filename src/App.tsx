import React, { useEffect, useState } from 'react'
import { moveRover } from './components/Rover'

const App: React.FC = () => {
  const [output, setOutput] = useState<string>('')

  useEffect(() => {
    const input = `5 5 
1 2 N 
LMLMLMLMM 
3 3 E 
MMRMMRMRRM 

`

    const result = moveRover(input)
    setOutput(result.trim())
  }, [])

  return (
    <div>
      <h3>Rover's Position</h3>
      <pre>{output}</pre>
    </div>
  )
}

export default App
