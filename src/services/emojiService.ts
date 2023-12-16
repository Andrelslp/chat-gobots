// https://emoji-api.com/

export interface IEmojiProps {
  character: string;
  codePoint: string;
  group: string;
  slug: string;
  subGroup: string;
  unicodeName: string;
}

const KEY = 'a5a7ad0b8fc9b5cf1fbb07584e54a8bc5f7259b2';

const emojiService = {
  getEmojis: async () => {
    try {
      const response = await fetch(
        `https://emoji-api.com/emojis?access_key=${KEY}`
      );

      const emojiList = await response.json();

      return emojiList;
    } catch (error) {
      throw new Error(`Erro ao buscar emojis: ${error}`);
    }
  },

  getEmojisBySearch: async (search: string) => {
    try {
      const response = await fetch(
        `https://emoji-api.com/emojis?search=${search}&access_key=${KEY}`
      );

      const emojiList = await response.json();

      return emojiList;
    } catch (error) {
      throw new Error(`Erro ao buscar emojis: ${error}`);
    }
  }
};

export default emojiService;
