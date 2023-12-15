import { FormEvent, useState } from 'react';
import { BsSend } from 'react-icons/bs';

interface IInputSubmitProps {
  onSubmit: (value: string) => void;
  placeholder: string;
}

export default function InputSubmit({
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
      className="bg-dark-2 flex justify-between rounded-xl"
    >
      <input
        type="text"
        placeholder={placeholder}
        onChange={(event) => setInput(event.target.value)}
        value={input}
        className="bg-dark-2 text-white-1 h-20 w-full rounded-2xl px-4 py-1 text-3xl"
      />
      <button
        type="submit"
        className="bg-dark-1 hover:bg-green-opacity-1 rounded-bl-[64px] rounded-br-[9px] rounded-tr-[10px] px-8"
      >
        <BsSend className="text-dark-2 hover:text-white-1" size={34} />
      </button>
    </form>
  );
}
