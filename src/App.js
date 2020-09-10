import React, { Component } from 'react';
import Todos from './Todos'
import Addtodos from './Addtodos'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'code by 10am'},
      {id: 2, content: 'sleep by 10pm'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return(todo.id !== id)
    })

    this.setState({
      todos
    })
  }

  addtodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]

    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Todos App</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <Addtodos addtodo={this.addtodo}/>
      </div>
    );
  }
}

export default App;


