import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            task: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            task: ''
        })
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render(){
        return(
            <form className='TodoForm' onSubmit={this.handleSubmit}>
                <label htmlFor='task'>Task: </label>
                <input
                id='task'
                name='task'
                placeholder='New Todo'
                value={this.state.task}
                onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;