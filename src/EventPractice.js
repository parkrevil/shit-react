import { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const {username, message} = form;
  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(nextForm);
  }
  const onClick = () => {
    this.setForm({
      username: '',
      message: '',
    })
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>Event</h1>

      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  )
};

export default EventPractice;

/* import { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
    username: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleClick = () => {
    alert(this.state.message + this.state.username)

    this.setState({
      message: '',
      username: '',
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <h1>Event</h1>

        <input
          type="text"
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />


        <button onClick={this.handleClick}>reset</button>
      </div>
    )
  }
}

export default EventPractice; */