interface IMessageProps {
  message: string;
  isOwner?: boolean;
}

export default function Message({ message, isOwner }: IMessageProps) {
  const MessageParagraph = (
    <p className={`h-fit rounded-xl px-6 py-2 text-white-1`}>{message}</p>
  );

  return (
    <div className={`m-2 flex ${isOwner && 'self-end'}`}>
      {MessageParagraph}
    </div>
  );
}
