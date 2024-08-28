import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.changingInput = this.changingInput.bind(this)
    }

    changingInput(event) {
        this.setState((state) => {
            return {
                input: event.target.value
            }
        })
    }

    handleInput() {
        this.props.handleInput(this.state.input)
        this.setState({
            input: ''
        })

    }

    render() {
        return (
            <form style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <input type="text" onChange={this.changingInput} value={this.state.input} id="fname" name="fname" style={{ width: '500px', padding: '10px' }} />
                <button type="button" onClick={this.handleInput} style={{ padding: '10px' }}>add task</button>
            </form>
        )
    }
}
