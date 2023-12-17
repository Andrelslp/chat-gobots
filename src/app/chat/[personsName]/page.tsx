'use client';

import Header from '@/components/Header';
import LeftSidebar from '@/components/LeftSidebar';
import Messages from '@/components/Messages';
import { useState } from 'react';

export default function PrivateChat({
  params
}: {
  params: { personsName: string };
}) {
  const [contact, setContact] = useState<string>('');

  const userName = params.personsName.slice(7);

  return (
    <div className="h-screen max-h-screen flex flex-col">
      <Header />

      <main className="h-full w-full flex flex-row hidden sm:flex">
        <LeftSidebar userName={userName} setContact={setContact} />
        <Messages
          userName={userName}
          contact={contact}
          setContact={setContact}
        />
      </main>

      <main className="h-full w-full flex flex-row sm:hidden">
        {!contact ? (
          <LeftSidebar userName={userName} setContact={setContact} />
        ) : (
          <Messages
            userName={userName}
            contact={contact}
            setContact={setContact}
          />
        )}
      </main>
    </div>
  );
}
