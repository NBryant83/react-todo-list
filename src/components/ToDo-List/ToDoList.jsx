import { Component } from 'react'
import ListItem from '../list-item/ListItem.jsx'
import placeHolderTasks from './placeHolderTasks.js'


export default class TodoList extends Component {
  state = {
    taskArray: placeHolderTasks,
    newItemInput: ''
  }

  // event handlers
  handleClearList = () => {
    this.setState({
      taskArray: []
    }, () => console.log('clearing the list!', this.state))
  }

  handleNewItemChange = (e) => {
    this.setState({
      newItemInput: e.target.value
    }, () => console.log(this.state))
  }

  handleNewItemSubmit = (e) => {
    e.preventDefault()
    this.setState((prevState, props) => {
      return {
        taskArray: [...prevState.taskArray, this.state.newItemInput]
      }
    }, () => this.setState({ newItemInput: '' }))
  }

  handleDeleteTask = (index) => {
    this.setState((prevState, props) => {
      // make a new array from prev state
      let newTaskArray = [...prevState.taskArray]

      // splice task out
      newTaskArray.splice(index, 1)
      return {
        taskArray: newTaskArray
      }
    })
  }

  render() {
    const listItems = this.state.taskArray.map((placeHolderTask, index) => {
      return <ListItem 
        task={placeHolderTask} 
        key={`ListItem ${index}`} 
        handleDeleteTask={() => { this.handleDeleteTask(index) }}
        />
    })
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>

        <form onSubmit={this.handleNewItemSubmit}>
          <input type="text"
            placeholder="Type an item here"
            onChange={this.handleNewItemChange}
            value={this.state.newItemInput}
            />
            
            <input 
              type='submit' 
              value='Add Item' 
            />
          </form>

        <ul>
          {listItems}
        </ul>

        <button onClick={this.handleClearList}>Finished the list!</button>
      </div>
    )
  }
}