export interface IMessageDataProps {
  id: string;
  sender: string;
  recipient: string;
  text: string;
  date: string;
  isOwner?: boolean;
}

const LOCAL_STORAGE_KEY = 'chatHistory';

const chatHistoryService = {
  getMessages: () => {
    const responseData =
      window.localStorage.getItem(LOCAL_STORAGE_KEY) || 'undefined';

    if (responseData === 'undefined') return [];

    const data = JSON.parse(responseData);

    return data;
  },

  postMessage: (
    registeredMessages: IMessageDataProps[],
    newMessage: IMessageDataProps
  ) => {
    const registeredMessagesData = registeredMessages;

    registeredMessagesData.push(newMessage);

    const data = JSON.stringify(registeredMessagesData);

    return window.localStorage.setItem(LOCAL_STORAGE_KEY, data);
  }
};

export default chatHistoryService;
