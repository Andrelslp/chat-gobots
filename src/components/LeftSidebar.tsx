// 'use client';

import loginService, { IUserDataProps } from '@/services/loginService';
import { useEffect, useState } from 'react';

function UserProfile({ userName }: { userName: string }) {
  return (
    <div className="item-center flex h-16 justify-between bg-dark-5 px-4 py-3 text-white-1">
      <div className="flex items-center justify-center gap-6">
        <span>{userName}</span>
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
  const [list, setList] = useState<IUserDataProps[]>([]);

  useEffect(() => {
    const registeredUsers: IUserDataProps[] = loginService.getUsers();

    const contactList = registeredUsers.filter(
      (item) => item.name.toLowerCase() !== userName.toLowerCase()
    );

    setList(contactList);
  }, []);

  const channel = new BroadcastChannel('contactListChannel');

  // Receive the event in a different window to update the message history
  channel.onmessage = () => {
    const registeredUsers: IUserDataProps[] = loginService.getUsers();

    const contactList = registeredUsers.filter(
      (item) => item.name.toLowerCase() !== userName.toLowerCase()
    );

    setList(contactList);
  };

  return (
    <div className="flex flex-col overflow-y-auto bg-dark-8">
      {list.map((item) => (
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
    <div className="flex-coll h-full w-1/4 bg-dark-8">
      <UserProfile userName={userName} />
      <ContactList userName={userName} setContact={setContact} />
    </div>
  );
}
