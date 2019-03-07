import React, { Component } from "react";
import TodoItems from "./todoitem";
import {Container,Row,Col} from 'react-bootstrap'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.filterTodo = this.filterTodo.bind(this);
  }
  addItem(e) {
    if (this.inputValue.value !== "") {
      var newItem = {
        text: this.inputValue.value,
        isEdit: false
      };
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
      this.inputValue.value = "";
    }
    e.preventDefault();
  }

  deleteItem(index) {
    // var selectedItems = this.state.items.filter(function (item) {
    //   return (item.key !== key);
    // });

    const { items } = this.state;
    items.splice(index, 1);

    // console.log(selectedItems);
    this.setState({
      items
    });
  }

  filterTodo(e) {
    var li = document.getElementsByClassName("names");
    var updatedList = this.state.items;
    var filteredList = updatedList.filter(obj => obj.text.indexOf(e.target.value) > -1);
    for (var i = 0; i < li.length; i++) {
      var indexOfLi = li[i];
      var span = indexOfLi.getElementsByTagName("span")[0];
      console.log(filteredList, e.target.value)
      if (filteredList.filter(obj => obj.text === span.innerText).length) {
        indexOfLi.style.display = "";
      } else {
        indexOfLi.style.display = "none";
      }
    }
  }
 editItem() {
  // var list = document.querySelector('li');
  // var editList = document.querySelector('names');
  //   editList.onclick = function(){
  //     list.setAttribute("contentEditable", true);
  //   }
  var li = document.getElementsByClassName("names");
    for (var i = 0; i < li.length; i++) {
        document.querySelectorAll("li")[i].addEventListener("click", function () {

            this.parentElement.querySelector("names").setAttribute("contenteditable", "true");
            this.parentElement.querySelector("names").addEventListener("keypress", enterPress);

            function enterPress(event) {
                if (event.keyCode === 13) {
                    this.setAttribute("contenteditable", "false");
                }
            }
        });
    }
}
  render() {
    return (
      <div className="todoList container">
        <div className="header">
          <form onSubmit={this.addItem}>
            <Container>
              <Row>
                <Col md={6} className="text-center">
                  <input ref={(a) => this.inputValue = a}
                   placeholder="Enter your name">
                  </input>
                  <button type="submit">Add</button>
                </Col>
                <Col md={6} className="text-center">
                  <input  type="text"
                    className="center-block"
                    placeholder="Search here..."
                    onChange={this.filterTodo}
                  />
                </Col>
              </Row>
            </Container>
          </form>
        </div>
        <TodoItems entries={this.state.items}
          delete={this.deleteItem} />
      </div>
    );
  }
}
export default TodoList;