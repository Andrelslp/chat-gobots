import { IEmojiProps } from '@/services';
import emojiService from '@/services/emojiService';
import { FormEvent, useEffect, useState } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { MdSend } from 'react-icons/md';

interface IInputSubmitProps {
  onSubmit: (value: string) => void;
  placeholder: string;
  showEmojiPicker: boolean;
  setShowEmojiPicker: (data: boolean) => void;
}

export default function MessageBar({
  onSubmit,
  placeholder,
  showEmojiPicker,
  setShowEmojiPicker
}: IInputSubmitProps) {
  const [input, setInput] = useState('');
  const [inputEmoji, setInputEmoji] = useState('');
  const [emojiList, setEmojiList] = useState<IEmojiProps[]>([]);

  const getEmojiList = async () => {
    const response = await emojiService.getEmojis();
    setEmojiList(response);
  };

  const getEmojiBySearch = async (search: string) => {
    const response = await emojiService.getEmojisBySearch(search);
    setEmojiList(response);
  };

  useEffect(() => {
    getEmojiList();
  }, []);

  const handleEmojiModal = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emoji: string) => {
    setInput((prevValue) => prevValue + emoji);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(input.trim());
    setInput('');
  };

  return (
    <div>
      {showEmojiPicker && (
        <div className="w-full flex flex-col gap-4 p-3 bg-dark-5">
          <input
            className="w-full rounded-2xl px-4 py-3.5 text-2xl text-white-1 bg-dark-6"
            type="text"
            placeholder="Pesquisar emoji"
            onChange={(event) => {
              const inputValue = event.target.value;
              getEmojiBySearch(inputValue);
              setInputEmoji(inputValue);
            }}
            value={inputEmoji}
          />

          <div className="flex h-56 overflow-y-scroll">
            <ul className="flex flex-wrap">
              {Array.isArray(emojiList) &&
                emojiList?.map((emoji) => (
                  <li
                    className="m-1.5 cursor-pointer"
                    key={emoji.unicodeName}
                    onClick={() => handleEmojiClick(emoji.character)}
                  >
                    {emoji.character}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="h-20 w-full flex items-center gap-6 p-6 bg-dark-5 "
      >
        <div
          className="cursor-pointer rounded-full p-3 bg-dark-1"
          onClick={handleEmojiModal}
        >
          <BsEmojiSmile
            className="text-dark-2 hover:text-white-1"
            title="Emoji"
            id="emoji-open"
          />
        </div>
        <input
          type="text"
          placeholder={placeholder}
          onChange={(event) => setInput(event.target.value)}
          value={input}
          className="bg-dark-7 flex h-10 w-full items-center rounded-lg px-5 py-4 text-2xl text-white-1 focus:outline-none"
        />
        <button
          type="submit"
          className="flex items-center justify-center rounded-full bg-dark-1 p-3"
        >
          <MdSend
            className="cursor-pointer text-xl text-dark-2 hover:text-white-1"
            title="Enviar mensagem"
          />
        </button>
      </form>
    </div>
  );
}
