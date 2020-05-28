
import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import NewConversationForm from './NewConversationForm';
import MessagemsArea from './MessagemsArea';
import Cable from './Cable';

const findActiveConversation = (conversations, activeConversation) => conversations.find(
  conversation => conversation.id === activeConversation,
);

const mapConversations = (conversations, handleClick) => conversations.map(conversation => (
  <li key={conversation.id} onClick={() => handleClick(conversation.id)}>
    {conversation.title}
  </li>
));

class ConversationsList extends React.Component {
  constructor() {
    super();
    this.state = {
      conversations: [],
      activeConversation: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReceivedConversation = this.handleReceivedConversation.bind(this);
    this.handleReceivedMessagem = this.handleReceivedMessagem.bind(this);
  }

  componentDidMount() {
    const token = localStorage.getItem('token');

    fetch('https://aqueous-wildwood-18424.herokuapp.com/conversations', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(conversations => this.setState({ conversations }));
  }

  handleClick(id) {
    this.setState({ activeConversation: id });
  }

  handleReceivedConversation(response) {
    const { conversation } = response;

    this.setState(prevState => (
      { conversations: [...prevState, conversation] }
    ));
  }

  handleReceivedMessagem(response) {
    const { conversations } = this.state;
    const { messagem } = response;
    const conversation = conversations.find(
      conversation => conversation.id === messagem.conversation_id,
    );
    conversation.messagems = [...conversation.messagems, messagem];
    this.setState({ conversations });
  }

  render() {
    const { conversations, activeConversation } = this.state;
    return (
      <div className="conversationsList">
        <ActionCable
          channel={{ channel: 'ConversationsChannel' }}
          onReceived={this.handleReceivedConversation}
        />
        {conversations.length ? (
          <Cable
            conversations={conversations}
            handleReceivedMessagem={this.handleReceivedMessagem}
          />
        ) : null}
        <h2>Conversations</h2>
        <ul>{mapConversations(conversations, this.handleClick)}</ul>
        <NewConversationForm />
        {activeConversation ? (
          <MessagemsArea
            conversation={findActiveConversation(
              conversations,
              activeConversation,
            )}
          />
        ) : null}
      </div>
    );
  }
}

export default ConversationsList;
