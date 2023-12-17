interface IMessageProps {
  message: string;
  date: string;
  isOwner?: boolean;
}

export default function Message({ message, date, isOwner }: IMessageProps) {
  const MessageParagraph = <p className="px-2 pt-2 text-white-1">{message}</p>;
  const DateHour = (
    <p className="px-2 pb-2 text-lg w-full text-right text-white-1">{date}</p>
  );

  return (
    <div className={`m-2 flex ${isOwner && 'self-end'} `}>
      <div className={`rounded-xl ${isOwner ? 'bg-green-1 ' : 'bg-dark-5'}`}>
        {MessageParagraph}
        {DateHour}
      </div>
    </div>
  );
}
