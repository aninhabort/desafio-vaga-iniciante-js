import React from "react";

const ChatMessage = ({ userInfo }) => {
  return (
    <div>
      <p><strong>You</strong> {userInfo}</p>
    </div>
  )
}

export default ChatMessage