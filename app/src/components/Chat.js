import React from 'react';
import chat from '../styles/Chat.module.css';
import Message from './Message';

const Chat = () => (
  <main className={chat.main}>
    <Message currentUser={false} message="Some times I like to stay under the shower and image the water disolving my earthly existence and merging me back with the ether..." date={new Date()} picture="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" name="Don" />
    <Message currentUser message="...ok" date={new Date()} picture="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" name="Sarah" />
    <Message currentUser message="I think I have to go now" date={new Date()} picture="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" name="Sarah" />
    <Message currentUser={false} message="No :-(" date={new Date()} picture="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" name="Sarah" />
    <Message currentUser={false} message="Let's chat more" date={new Date()} picture="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" name="Sarah" />
  </main>
);

export default Chat;
