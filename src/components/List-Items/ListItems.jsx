import { Component } from 'react'

export default class ListItems extends Component {
  render() {
    return(
      <div>
        <li>{this.props.task}</li>
        <button onClick={this.props.handleDeleteTask}>del</button>
      </div>
    )
  }
}