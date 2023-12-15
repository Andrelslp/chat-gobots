export interface IUserDataProps {
  id: string;
  name: string;
}

const LOCAL_STORAGE_KEY = 'userAuth';

const loginService = {
  getUsers: () => {
    const responseData =
      window.localStorage.getItem(LOCAL_STORAGE_KEY) || 'undefined';

    if (responseData === 'undefined') return [];

    const data = JSON.parse(responseData);

    return data;
  },

  postUser: (registeredUsers: IUserDataProps[], userData: IUserDataProps) => {
    const registeredUsersData = registeredUsers;

    registeredUsersData.push(userData);

    const data = JSON.stringify(registeredUsersData);

    return window.localStorage.setItem(LOCAL_STORAGE_KEY, data);
  }
};

export default loginService;
