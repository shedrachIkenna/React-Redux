import React from 'react'


const Todos = ({todos, deleteTodo}) => {
   const todoList = todos.length ? (
       todos.map((todo) => {
        return(
                <div className="list" key={todo.id}>
                <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
       })
   ) : (
       <p className="paragraph">You have no todos left</p>
   )
    return(
        <div className="container">
            {todoList}
        </div>
    )
}

export default Todos;