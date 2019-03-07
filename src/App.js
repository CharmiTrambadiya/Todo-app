import React, { Component } from 'react';
// import './App.css';
// import TodoHeader from './components/todoheader';
import TodoList from './components/todolist';
// import TodoForm from './components/todoform';
class App extends Component {
  render() {
    return (
      <div className="App">
      <TodoList/>
        {/* <TodoHeader />

        <TodoList items={this.props.initItems}
        	removeItem={this.removeItem}
        	markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} /> */}
      </div>
    );
  }
}

export default App;
