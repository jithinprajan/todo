import React, { Component } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import AddItem from "./components/AddItem";
import Header from './layout/Header';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Buy Marmelad Candies",
        completed: false
      },
      {
        id: 2,
        title: "Meet With David",
        completed: true
      },
      {
        id: 3,
        title: "Finish the Landing Page",
        completed: false
      },
      {
        id: 4,
        title: "Video Conference",
        completed: false
      },
      {
        id: 5,
        title: "Design New Logo",
        completed: false
      }
    ]
  };
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: 1 + Math.random(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="master">
        <div className="App">
          <Header />
          <AddItem addTodo={this.addTodo} />
          <ToDoList
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          ></ToDoList>
        </div>
      </div>
    );
  }
}

export default App;
