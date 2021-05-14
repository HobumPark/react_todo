  import React, { Component } from 'react';

class ToDoInfo extends Component {
  state = {
    toggle: false,
    text: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleToggleChange = () => {
    const { toggle, text } = this.state;
    const { data, onUpdate } = this.props;
    // false -> true
    if (!toggle) {
      this.setState({
        text: data.text,
        toggle: true,
      });
    } else {
    // true -> false
      onUpdate(data.id, { text: text });
      this.setState({
        toggle: false,
      });
    }
    
  };
  handleRemove = (id) => {
    const { toDoList } = this.state;

    this.setState({
      toDoList: toDoList.filter((data) => data.id !== id),
    });
  };

  render() {
    const { data } = this.props;
    const { toggle, text } = this.state;
    return (
      <div>
        {toggle ? (
          <input onChange={this.handleChange} value={text} name="text"></input>
        ) : (
          <span>{data.text}</span>
        )}
        <button onClick={this.handleToggleChange}>{toggle ? '적용' : '수정'}</button>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    );
  }
}

export default ToDoInfo;