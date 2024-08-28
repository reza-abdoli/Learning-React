import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleDeletee = this.handleDeletee.bind(this)
    }


    handleInput(task) {
        this.setState((state) => {
      

            return {
                tasks: [
                    ...state.tasks,
                    { id: state.tasks.length+1, tasks: task }
                ]
            }

        })
    }

    handleDeletee(id) {
        const tasks = [...this.state.tasks];

        const index = tasks.findIndex(task => task.id === id);

        if (index !== -1) { 
            tasks.splice(index, 1);
        }
        this.setState((state) =>{
            return {
               tasks
            }
        })
    }

    render() {
        return (
            <>
                <Header handleInput={this.handleInput} />
                <Body handleDeletee={this.handleDeletee} tasks={this.state.tasks} />
            </>
        )
    }
}
