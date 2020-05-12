import React from 'react';
import PropTypes from 'prop-types';
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({ conversations, handleReceivedMessagem }) => (
  <>
    {conversations.map(conversation => (
      <ActionCable
        key={conversation.id}
        channel={{ channel: 'MessagemsChannel', conversation: conversation.id }}
        onReceived={handleReceivedMessagem}
      />
    ))}
  </>
);

Cable.propTypes = {
  conversations: PropTypes.number.isRequired,
  handleReceivedMessagem: PropTypes.func.isRequired,
};

export default Cable;
