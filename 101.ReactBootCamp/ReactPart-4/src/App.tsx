import { useTodo } from "./hooks/useTodos"



function App() {
  
  const {todos, setTodos} = useTodo()
  return (
    <div>
      {todos.map(t => <Todo title={t.title} id={t.id} setTodos={setTodos}/>)}
    </div>
  )
}


type TodoType = {
  title : String,
  id : String,
  setTodos: any
}
function Todo ({title , id , setTodos}: TodoType){
  return (
    <div style={{border:"2px solid black" ,padding:  10, margin: 4}}>

      <div>
          {title}
      </div>
      <button onClick={() => {
        setTodos((todos) => todos.filter( x => x.id != id))
      }}>Delete</button>
    </div>
  )
}

export default App
