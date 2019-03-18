import React, { Component } from "react";
class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
    this.editItem = this.editItem.bind(this);
    this.onChangeTextName = this.onChangeTextName.bind(this);
  }
  delete(e, key) {
    e.stopPropagation();
    this.props.delete(key);
  }
  editItem(index) {
    // console.log(li);
    // var list = document.querySelector("ol");
    // var editList = document.querySelector("li");
    //   list.setAttribute("contentEditable", true);
    this.props.editItem(index);
  }
  onChangeTextName(e,index) {
    var newItems = e.target.value;
    console.log(newItems)
    this.setState({ items: newItems });
    this.props.onChangeTextName(index);
  }
  createTasks(item, index) {
    return (
      <li className="names" key={index} onClick={() => this.editItem(index)}>
        {item.isEdit ? (
          <input type="text" className="inputName" value={item.text}  onChange={e => this.onChangeTextName(e,index)} />) : (
            <span onClick={() => "inputName"}>{item.text}</span>
          )}
        {/* <input type='text' className="inputName" value={item.text} /> */}
        <button onClick={(even) => this.delete(even, index)}>X</button>
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
