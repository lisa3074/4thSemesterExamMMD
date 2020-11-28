import React from "react";
import Message from "./Message";
export default function MessageBoard(props) {
  console.log("chat || MessageBoard.js | MessageBoard()");
  const mappedMessages = props.messages.map((message) => <Message key={message.id} {...message} />);

  return (
    <article className="MessageBoard">
      <div className="messageList">
        <ul>{mappedMessages}</ul>
      </div>
    </article>
  );
}
