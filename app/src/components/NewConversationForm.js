import React from 'react';

class NewConversationForm extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    const token = localStorage.getItem('token');
    e.preventDefault();
    fetch('https://aqueous-wildwood-18424.herokuapp.com/conversations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      body: JSON.stringify(this.state),
    });
    this.setState({ title: '' });
  }

  render() {
    const { state, handleSubmit, handleChange } = this;
    return (
      <div className="newConversationForm">
        <form onSubmit={handleSubmit}>
          <span>New Conversation:</span>
          <br />
          <input
            type="text"
            value={state.title}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default NewConversationForm;
