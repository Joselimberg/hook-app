
import { useTodo } from "../hooks/";
import { TodoAdd, TodoList } from "./";

export const TodoApp = () => {
  
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handelNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  } = useTodo();

  return (
    <>
      <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodosCount }</small> </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* TodoList */}
          <TodoList 
            todos={ todos } 
            onDeleteTodo={ handleDeleteTodo }
            onToggleTodo={ handleToggleTodo }
          />
          {/* Fin TodoList */}
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* TodoAdd onNewTodo( todo ) */}
          {/* {id: new Date()..., description:'', done:false} */}
          <TodoAdd onNewTodo={ handelNewTodo }/>
          {/* Fin TodoAdd */}
        </div>
      </div>
    </>
  )
}
