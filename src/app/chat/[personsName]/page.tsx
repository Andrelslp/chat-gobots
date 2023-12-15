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
    <div className="bg-white-1 flex h-full flex-col">
      <Header />
      <div className="flex h-full w-full flex-row">
        <LeftSidebar userName={userName} setContact={setContact} />
        <Messages userName={userName} contact={contact} />
      </div>
    </div>
  );
}
