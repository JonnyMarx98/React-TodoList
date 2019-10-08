import React, { Component } from 'react';
import './Todo.css'

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task,
            completed: this.props.completed
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    handleCompleted(evt){
        this.props.toggleCompleted(this.props.id)
    }

    handleRemove(evt){
        this.props.remove(this.props.id);
    }

    handleEdit(evt){
        evt.preventDefault()
        this.props.edit(this.props.id, this.state.task);
        this.toggleForm();
    }

    toggleForm(){
        this.setState({isEditing: !this.state.isEditing});
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render(){
        let result;
        if(this.state.isEditing){
            result =
            <div className="Todo">
                <form className='Todo-edit-form' onSubmit={this.handleEdit}>
                    <input
                    type='text'
                    name='task'
                    onChange={this.handleChange}
                    value={this.state.task}
                    />
                    <button>✔️</button>
                </form>
                
            </div>
        } else {
            result = 
            <div className="Todo">
                <li
                onClick={this.handleCompleted} 
                className={this.props.completed
                ? "Todo-task completed"
                : "Todo-task"
                }>{this.props.task}</li>
                <div className='Todo-buttons'>
                    <button onClick={this.toggleForm}>
                        <i className='fas fa-pen'/>
                    </button>
                    <button onClick={this.handleRemove}>
                        <i className='fas fa-trash'/>
                    </button>
                </div>
                
            </div>
        }

        return result;
    }
}

export default Todo;