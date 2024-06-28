import { useEffect, useState } from 'react'
import {TodoProvider} from './Contexts'
import './App.css'
import TodoForm from './Conponents/TodosForm'
import TodoItem from './Conponents/TodosItem'

function App() {
  const [todos, setTodo] = useState([])

  const addTodo = (todo) =>{
    setTodo((prev)=> [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) =>{
    setTodo((prev)=> prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo ) ) )
  }

  const deleteTodo = (id) =>{
    setTodo((prev) => prev.filter((elements) => elements.id !== id))
  }

  const toggleComplete = (id) =>{
    setTodo((prev) => prev.map((elements) => elements.id === id ? {...elements, completed: !elements.completed} : elements))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodo(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
       <div className="bg-[#172842] h-auto rounded-lg  py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="md:text-3xl text-2xl underline font-bold text-center mb-8 mt-2 text-orange-400">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((elements)=> (
                          <div key={elements.id} className='w-full'>
                              <TodoItem todo={elements} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
