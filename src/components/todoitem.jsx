import React, { Component } from "react";
class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }
  delete(key) {
    this.props.delete(key);
  }
  editItem(index) {
    // console.log(li);
    var list = document.querySelector("ol");
    var editList = document.querySelector("li");
    editList.onclick = function () {
      list.setAttribute("contentEditable", true);
    };
  }
  createTasks(item, index) {
    return (
      <li className="names" key={index} onClick={e => this.editItem(e)}>
        {item.isEdit ? (
          <input type="text" className="inputName" value={item.text} />) : (
            <span onClick={() => "inputName"}>{item.text}</span>
          )}
        {/* <input type='text' className="inputName" value={item.text} /> */}
        <button onClick={() => this.delete(index)}>X</button>
      </li>
    );
  }

  render() {
    var todoContent = this.props.entries;
    var listItems = todoContent.map((x, index) => this.createTasks(x, index));
    return <ol className="list container">{listItems}</ol>;
  }
}
export default TodoItems;
