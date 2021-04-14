import { Component } from 'react'
import ListItem from './List-Items/ListItems'


export default class ToDoList extends Component {
 render() {
  return(
   <div>
    <h1> Things I should stop procrastinating:</h1>
     <ul>
      <ListItems />
     </ul>    
   </div>
  )
 }
}