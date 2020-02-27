import React, { Component } from 'react'
import icon from '../images/delete.png'

export class TodoItem extends Component {
    listStyle=()=>{
        return{
            // background : '#cecece',
            padding : '0px 10px',
            borderBottom: '1px solid #f3f3f3',
            color : this.props.todo.completed ? '#cecece' : '#6f6f6f'
        }
    }
    
    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.listStyle()}>
                <p className="list-single">
                    <input
                    type="checkbox"
                    onChange ={this.props.markComplete.bind(this,id)}
                    checked={this.props.todo.completed}
                    id={id}
                    /> {' '}
                    <label for={id}>{title}</label>
                    <button onClick={this.props.delTodo.bind(this,id)}className="delete-todo">
                    <img src={icon} alt="Delete icon" />
                    </button>
                    </p>
            </div>
        )
    }
}
 
export default TodoItem
