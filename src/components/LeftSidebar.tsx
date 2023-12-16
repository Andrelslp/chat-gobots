// 'use client';

import loginService, { IUserDataProps } from '@/services/loginService';
import { BiSearchAlt2 } from 'react-icons/bi';

function SearchBar() {
  return (
    <div className="item-center bg-dark-5 flex h-16 w-full gap-3 py-3 pl-5">
      <div className="flex w-full flex-grow items-center gap-5 rounded-lg px-3 py-1">
        <div>
          <BiSearchAlt2 className="text-panel-header-icon text-white-1" />
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Pesquisar ou começar uma nova conversa"
            className="w-full bg-transparent text-sm text-white-1 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}

function ContactList({
  userName,
  setContact
}: {
  userName: string;
  setContact: (data: string) => void;
}) {
  const registeredUsers: IUserDataProps[] = loginService.getUsers();

  const contactList = registeredUsers.filter(
    (item) => item.name.toLowerCase() !== userName.toLowerCase()
  );

  return (
    <div className="bg-dark-8 flex flex-col overflow-y-auto">
      {contactList.map((item) => (
        <div key={item.id}>
          <div className="flex h-[4.5rem] flex-col justify-center">
            <button
              type="button"
              onClick={() => setContact(item.name || '')}
              className="flex h-full items-center justify-start pl-6 text-white-1"
            >
              {item.name}
            </button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default function LeftSidebar({
  userName,
  setContact
}: {
  userName: string;
  setContact: (data: string) => void;
}) {
  return (
    <div className="flex-coll bg-dark-8 h-full w-1/4">
      <SearchBar />
      <ContactList userName={userName} setContact={setContact} />
    </div>
  );
}
