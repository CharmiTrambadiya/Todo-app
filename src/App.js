import React, { Component } from 'react';
// import './App.css';
// import TodoHeader from './components/todoheader';
import TodoList from './components/todolist';
// import TodoForm from './components/todoform';
import Tables from "./components/table";
class App extends Component {
  render() {
    return (
      <div className="App container">
      <TodoList/>
        {/* <TodoHeader />

        <TodoList items={this.props.initItems}
        	removeItem={this.removeItem}
        	markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} /> */}
      <Tables />
      </div>
    );
  }
}

export default App;
