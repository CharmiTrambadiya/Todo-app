import React, { Component } from "react";
import { Table, Form, Button, Message } from "semantic-ui-react";
class Tables extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, address: "Rajkot", name: "Charmi", points: 50, percent: 90 },
        { id: 2, address: "Ahmedabad", name: "Aneri", points: 45, percent: 80 },
        { id: 3, address: "Rajkot", name: "Kruti", points: 40, percent: 70 },
        { id: 4, address: "Jamnagar", name: "Dhara", points: 35, percent: 60 },
        { id: 5, address: "Morbi", name: "Jinkal", points: 30, percent: 50 }
      ],
      selected: [{ name: "" }],
      errorMessage: "",
      isError: false
    };
    this.handleChangeTextEdit = this.handleChangeTextEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeTextEdit(e) {
    // console.log('Line ---- 29',e.target.value);
    // let selectedItem = this.state.selected;
    // selectedItem[e.target.name] = e.target.value;
    // // var newItems = e.target.value;
    // this.setState({selectedItem});
    // // this.props.onChangeTextEdit(selected);

    let selected = Object.assign({}, this.state.selected);
    console.log("Line ---- 22", selected);
    selected[e.target.name] = e.target.value;
    this.setState({ selected });
  }
  handleRowClick(details) {
    console.log("Line ---- 28 NEW", details);
    console.log("Line ---- 28 OLD", this.state.selected);
    if (details.id === this.state.selected.id) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
    console.log("Line ---- 18", details);
    const { show } = this.state;
    console.log(show);
    this.setState({ selected: details });
  }
  renderItem(item) {
    const clickCallback = () => this.handleRowClick(item);
    const itemRows = [
      <Table.Row onClick={clickCallback} key={item.id}>
        <Table.Cell>{item.id}</Table.Cell>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.address}</Table.Cell>
        <Table.Cell>{item.points}</Table.Cell>
        <Table.Cell>{item.percent}</Table.Cell>
      </Table.Row>
    ];
    return itemRows;
  }
  handleValidation() {
    let data = this.state.selected;

    //points validation
    var pointsVaule = parseInt(data["points"]);
    if (30 > pointsVaule && pointsVaule < 120) {
      this.setState({
        ErrorMessage: "Please enter a value between 30 and 120.",
        isError: true
      });
      // return false
    } else {
      // return true;
    }

    //address validation
    var addressVaule = data["address"];
    console.log("Line ---- 70", addressVaule);
    if (addressVaule === "Ahmedabad") {
      this.setState({
        ErrorMessage: "Please enter other city.",
        isError: true
      });
      return false;
    } else {
      return true;
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    // let newData = this.state.selected;
    this.handleValidation();

    // let newdata = this.state.data;
    // newData.push({id: "", name: "", address: "", points: "", percent: ""});
    // console.log('Line ---- 86',newData);

    const { selected } =this.state;
    const data = this.state.data.slice(0);
    const foundIndex = data.findIndex(detail => detail.id === selected.id);
    if(foundIndex > -1){
      data[foundIndex] = selected;
      console.log('Line ---- 49',data[foundIndex]);
      // this.setState({data: [...data, selected]}, () => {
      //   this.setState({ selected });
      // });
      this.setState({ data });
    }
  }
  render() {
    let allRows = [];
    this.state.data.forEach(item => {
      const dataRows = this.renderItem(item);
      allRows = allRows.concat(dataRows);
    });
    return (
      <div className="tableData">
        <Table fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Points</Table.HeaderCell>
              <Table.HeaderCell>Percent</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{allRows}</Table.Body>
        </Table>

        {this.state.show && (
          <div className="userform">
            <h2 className="text-center">User-detail Form</h2>

            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths="equal">
                <Form.Input
                  type="number"
                  fluid
                  label="ID"
                  value={this.state.selected.id}
                  name="id"
                />
                <Form.Input
                  fluid
                  label="Name"
                  value={this.state.selected.name}
                  name="name"
                  onChange={e => this.handleChangeTextEdit(e)}
                />
                <Form.Input
                  fluid
                  error
                  label="Address"
                  value={this.state.selected.address}
                  name="address"
                  onChange={e => this.handleChangeTextEdit(e)}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  type="number"
                  fluid
                  error
                  label="Points"
                  name="points"
                  value={this.state.selected.points}
                  onChange={e => this.handleChangeTextEdit(e)}
                />
                <Form.Input
                  type="number"
                  fluid
                  label="Percent"
                  name="percent"
                  value={this.state.selected.percent}
                  onChange={e => this.handleChangeTextEdit(e)}
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
              {!!this.state.isError && (
                <Message color='red'>
                  {this.state.ErrorMessage}{" "}
                </Message>
              )}
            </Form>
            {/* {this.state.selected.name}    //print only name */}
          </div>
        )}
      </div>
    );
  }
}
export default Tables;