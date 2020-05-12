import React from 'react';
import PropTypes from 'prop-types';
import NewMessagemForm from './NewMessagemForm';

const orderedMessagems = messagems => {
  const sortedMessagems = messagems.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at),
  );
  return sortedMessagems.map(messagem => <li key={messagem.id}>{messagem.text}</li>);
};

const MessagemsArea = ({
  conversation: { id, title, messagems },
}) => (
  <div className="messagemsArea">
    <h2>{title}</h2>
    <ul>{orderedMessagems(messagems)}</ul>
    <NewMessagemForm conversation_id={id} />
  </div>
);

MessagemsArea.propTypes = {
  conversation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MessagemsArea;
