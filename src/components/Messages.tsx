import { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Message from './Message';
import Logo from './Logo';
import chatHistoryService, {
  IMessageDataProps
} from '@/services/chatHistoryService';
import MessageBar from './MessageBar';
import { BiArrowBack } from 'react-icons/bi';

function ChatHeader({
  contact,
  setContact
}: {
  contact: string;
  setContact: (data: string) => void;
}) {
  return (
    <div className="h-[70px] flex item-center justify-between px-4 py-3 bg-dark-5 text-white-1">
      <div className="flex items-center justify-center gap-2">
        <span className="sm:hidden" onClick={() => setContact('')}>
          <BiArrowBack />
        </span>
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
  const [messages, setMessages] = useState<IMessageDataProps[]>([]);
  const messageContainer = useRef<HTMLDivElement>(null);
  const channel = new BroadcastChannel('chatChannel');

  // Handles sending messages
  const handleSubmit = (inputValue: string) => {
    if (inputValue) {
      const date = `${new Date().toLocaleString()}`;

      const newMessage = {
        id: uuid(),
        sender: userName,
        recipient: contact,
        text: inputValue,
        date: date
      };

      // Update local history
      setMessages((previous) => [
        ...previous,
        { ...newMessage, isOwner: true }
      ]);

      // Updates history in Local Storage
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const chatWithoutIsOwner = messages.map(({ isOwner, ...rest }) => rest);
      chatHistoryService.postMessage(chatWithoutIsOwner, newMessage);

      // Emits the 'storage' event to other tabs/windows
      window.dispatchEvent(new Event('storage'));
      channel.postMessage('update');
    }
  };

  // Receive the event in a different window to update the message history
  channel.onmessage = () => {
    const data: IMessageDataProps[] = chatHistoryService.getMessages();

    const chat: IMessageDataProps[] = data.filter(
      (msg) =>
        (msg.sender === contact && msg.recipient === userName) ||
        (msg.sender === userName && msg.recipient === contact)
    );

    const chatWithIsOwner = chat.map((msg) => ({
      ...msg,
      isOwner:
        userName.toLowerCase() === msg.sender.toLowerCase() ? true : false
    }));

    setMessages(chatWithIsOwner);
  };

  // Load chat message history
  useEffect(() => {
    const data: IMessageDataProps[] = chatHistoryService.getMessages();

    const chat: IMessageDataProps[] = data.filter(
      (msg) =>
        (msg.sender === contact && msg.recipient === userName) ||
        (msg.sender === userName && msg.recipient === contact)
    );

    const chatWithIsOwner = chat.map((msg) => ({
      ...msg,
      isOwner:
        userName.toLowerCase() === msg.sender.toLowerCase() ? true : false
    }));

    setMessages(chatWithIsOwner);
  }, [contact, userName]);

  // Keeps the scroll always visible on the last message sent
  useEffect(() => {
    messageContainer.current?.scrollTo(
      0,
      messageContainer.current.scrollHeight
    );
  }, [messages]);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  return (
    <div className="h-full flex flex-col justify-between">
      <div
        ref={messageContainer}
        className="w-full flex flex-col overflow-y-auto"
        style={{
          height: !showEmojiPicker
            ? 'calc(100vh - 220px )'
            : 'calc(100vh - 522px )'
        }}
      >
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message.text}
            isOwner={message.isOwner}
          />
        ))}
      </div>

      <MessageBar
        onSubmit={handleSubmit}
        placeholder="Digite sua mensagem aqui"
        showEmojiPicker={showEmojiPicker}
        setShowEmojiPicker={setShowEmojiPicker}
      />
    </div>
  );
}

export default function Messages({
  userName,
  contact,
  setContact
}: {
  userName: string;
  contact: string;
  setContact: (data: string) => void;
}) {
  return (
    <div className="h-full w-full flex flex-col justify-between bg-dark-2">
      {!contact ? (
        <div className="flex h-full flex-col items-center justify-center gap-4 text-white-1">
          <Logo />
          <span>Selecione um contato para iniciar uma conversa.</span>
        </div>
      ) : (
        <>
          <ChatHeader contact={contact} setContact={setContact} />
          <ChatMessages userName={userName} contact={contact} />
        </>
      )}
    </div>
  );
}
