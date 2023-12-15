import { FormEvent, useState } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { MdSend } from 'react-icons/md';

interface IInputSubmitProps {
  onSubmit: (value: string) => void;
  placeholder: string;
}

export default function MessageBar({
  onSubmit,
  placeholder
}: IInputSubmitProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(input.trim());
    setInput('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex h-20 w-full items-center gap-6 rounded-xl bg-dark-1 px-4"
    >
      <div>
        <BsEmojiSmile className="cursor-pointer text-xl" title="Emoji" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(event) => setInput(event.target.value)}
        value={input}
        className="flex h-10 w-full items-center rounded-lg bg-dark-2 px-5 py-4 text-sm text-white-1 focus:outline-none"
      />
      <button
        type="submit"
        className="hover:bg-green-opacity-1 flex w-10 items-center justify-center bg-dark-1"
      >
        <MdSend
          className="cursor-pointer text-xl text-dark-2 hover:text-white-1"
          title="Enviar mensagem"
        />
      </button>
    </form>
  );
}
