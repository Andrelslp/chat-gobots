import { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import InputSubmit from './Input';
import Message from './Message';

function ChatHeader({ contact }: { contact: string }) {
  return (
    <div className="item-center bg-dark-1 flex h-16 justify-between px-4 py-3">
      <div className="flex items-center justify-center gap-6">
        <span>{contact}</span>
      </div>
    </div>
  );
}

function ChatMessages({
  userName,
  contact
}: {
  userName: string;
  contact: string;
}) {
  const messageContainer = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<any[]>([]);

  // useEffect(() => {
  // getMessages()
  // const chat = messages.filter(
  //   (msg) =>
  //     (msg.sender === contact && msg.recipient === userName) ||
  //     (msg.sender === userName && msg.recipient === contact)
  // );
  // setMessages(chat);
  // }, []);

  useEffect(() => {
    messageContainer.current?.scrollTo(
      0,
      messageContainer.current.scrollHeight
    );
  }, [messages]);

  const handleSubmit = (inputValue: string) => {
    const newMessage = {
      text: inputValue,
      sender: userName,
      recipient: contact,
      id: uuid()
    };

    setMessages((previous) => [...previous, { ...newMessage, isOwner: true }]);
  };

  return (
    <div className="content-area flex w-full flex-col items-center justify-center">
      <div
        // ref={messageContainer}
        className="flex h-[60rem] w-full flex-col overflow-auto px-5 pt-14"
      >
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message.text}
            isOwner={message.isOwner}
          />
        ))}
      </div>
      <InputSubmit
        onSubmit={handleSubmit}
        placeholder="Digite sua mensagem aqui"
      />
    </div>
  );
}

export default function Messages({
  userName,
  contact
}: {
  userName: string;
  contact: string;
}) {
  return (
    <div className="border-1 bg-dark-2 z-10 flex w-full flex-col overflow-y-auto">
      <ChatHeader contact={contact} />
      <ChatMessages userName={userName} contact={contact} />
    </div>
  );
}
