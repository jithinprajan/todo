import React, { Component } from 'react'
import ToDo from "./ToDo"

export class ToDoList extends Component {
    
    render() {
        return this.props.todos.map((todo)=>(
        <ToDo todo={todo} key={todo.id} markComplete={this.props.markComplete} delTodo={this.props.delTodo}></ToDo>
        ))
    }
}

export default ToDoList
