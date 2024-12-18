import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-gray-600'>
     <h2 className='text-center font-bold text-4xl font-serif py-6'>Learn About Todo</h2>
    <div className='flex justify-center'>
    <AddTodo />
    </div>
     <Todos />
     </div>
    </>
  )
}

export default App
