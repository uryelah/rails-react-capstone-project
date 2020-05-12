
import React from 'react';
import PropTypes from 'prop-types';

class NewMessagemForm extends React.Component {
  constructor(props) {
    super(props);

    const { conversationId } = this.props;

    this.state = {
      text: '',
      conversationId,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ conversationId: nextProps.conversationId });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    const token = localStorage.getItem('token');

    e.preventDefault();

    fetch('https://aqueous-wildwood-18424.herokuapp.com/messagems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      body: JSON.stringify(this.state),
    });
    this.setState({ text: '' });
  }

  render() {
    const { state, handleChange, handleSubmit } = this;
    return (
      <div className="newMessagemForm">
        <form onSubmit={handleSubmit}>
          <label htmlFor="message">
            New Messagem:
            <input
              id="message"
              type="text"
              value={state.text}
              onChange={handleChange}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

NewMessagemForm.propTypes = {
  conversationId: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default NewMessagemForm;
