import React, { Component } from 'react'

export default class Lists extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    this.props.handleDeletee(this.props.id)
  }

  render() {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p>{this.props.id}</p>
          <p>{this.props.tasks}</p>
          <input type="checkbox" onClick={this.handleDelete} checked=''/>
        </div>
        <hr style={{ margin: '0' }}></hr></>
    )
  }
}
