import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import uuid from 'uuid/v4';
import './TodoList.css'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
    }

    toggleCompleted(id){
        let updatedItems = this.state.items.map(
            item => {
                if(item.id === id){
                    return {...item, completed: !item.completed}
                }
                return item;
            }
        )

        this.setState({items: updatedItems})
    }

    addItem(item){
        let newItem = {...item, id: uuid(), completed: false}
        this.setState(st => (
            {items: [...st.items, newItem]}
            ));
    }

    editItem(id, newTask){
        let updatedItems = this.state.items.map(
            item => {
                if(item.id === id){
                    return {...item, task: newTask}
                }
                return item;
            }
        )

        this.setState({items: updatedItems})

    }

    removeItem(id){
        this.setState(st => (
            {items: st.items.filter(
                item => item.id !== id
            )}
        ));
    }

    render(){
        let items = this.state.items.map(item => (
            <Todo
            key={item.id}
            id={item.id}
            task={item.task}
            completed={item.completed}
            remove={this.removeItem}
            edit={this.editItem}
            toggleCompleted={this.toggleCompleted}
            />
        ))
        return(
            <div className="TodoList">
                <h1>
                    Todo List <span>A Simple React Todo List App</span></h1>
                <ul>
                    {items}
                </ul>
                <TodoForm addItem={this.addItem}/>
            </div>
        )
    }
}

export default TodoList;