import { Component } from 'react'
import './App.css'
import ToDoList from './components/ToDo-List/ToDoList'

export default class App extends Component {
  render() {
    return(
      <div>
        <ToDoList />
      </div>
    )
  }
}
