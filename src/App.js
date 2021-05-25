import React, { Component } from "react";
import ToDoItem from './ToDoItem.js'
import todosData from './todosData.js'
import Conditional from './Conditional.js'
import LogInOutBtn from './LogInOutBtn.js'
import StarWarsComponent from './StarWarsComponent.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
      isLoading: true,
      isLogged: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLog = this.handleLog.bind(this);
    this.handleChar = this.handleChar.bind(this);
  }

  async handleChange(id) {
    //   const newList = this.state.todos.map(item => {
    //   if (item.id === id) {//Number(e.target.closest('.checkbox')?.dataset.id)) {
    //     item.completed = !item.completed;
    //     return item;
    //   }
    //   else {
    //     return item;
    //   }
    // })
    // this.setState({ todos: newList })

    // this.setState(prevState => {
    //   console.log(prevState)
    //   const updatedTodos = prevState.todos.map(item1 => {
    //     // if (item1.id === id) {
    //     //   item1.completed = !item1.completed;
    //     // }
    //     // console.log('after:', item1)
    //     // return item1;
    //     return 1
    //   });
    //   console.log(updatedTodos)
    //   console.log(this.state)
    //   return { todos: [1, 2, 3, 4] };
    // }
    //   , console.log('yooo', this.state))
    // this.setState({ todos: [1, 2] }, console.log('yoo', this.state))
    // console.log(this.state)


    await this.setState(prevState => {

      const updatedTodos = prevState.todos.map(item1 => {
        if (item1.id === id) {


          // item1.completed = !item1.completed;
          console.log('after:', !item1.completed)
          item1.completed = !item1.completed
          return {
            ...item1
          };
          // item1.completed = false
        }

        console.log('after:', item1)
        return item1;
        // return 1
      });
      console.log(updatedTodos);

      return { todos: updatedTodos }
    });
    // console.log(this.state)




  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,

      })
    }, 1500)
  }

  async handleLog() {
    await this.setState(prevState => {
      return {
        isLogged: !prevState.isLogged
      }
    });
    console.log(this.state)

  }

  async handleChar(data) {
    await this.setState({ character: data });
    console.log(this.state)
  }

  render() {
    const todoItems = this.state.todos.map(el => <ToDoItem key={el.id} item={el} handleChange={this.handleChange} />)

    return (
      <div className='todo-list' >

        <Conditional isLoading={this.state.isLoading} />
        <LogInOutBtn isLogged={this.state.isLogged} handleLog={this.handleLog} />
        <StarWarsComponent handle={this.handleChar} name={this.state.character?.name} />
        { todoItems}
      </div>
    );
  }

}
export default App;
