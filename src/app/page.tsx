'use client';

import Container from '@/components/Container';
import Header from '@/components/Header';
import InputSubmit from '@/components/Input';
import loginService, { IUserDataProps } from '@/services/loginService';
import { useRouter } from 'next/navigation';
import { v4 as uuid } from 'uuid';

export default function Home() {
  const router = useRouter();

  const handleSubmit = (inputValue: string) => {
    const channel = new BroadcastChannel('contactListChannel');
    const registeredUsers: IUserDataProps[] = loginService.getUsers();

    // Checks if the user is already registered in the system
    if (registeredUsers && registeredUsers.length > 0) {
      const findName: boolean = registeredUsers.some(
        (item) => item.name.toLowerCase() === inputValue.toLowerCase()
      );

      if (findName) return router.push(`/chat/name=${inputValue}`);
    }

    const newUser: IUserDataProps = {
      id: uuid(),
      name: inputValue
    };

    loginService.postUser(registeredUsers, newUser);
    router.push(`/chat/name=${inputValue}`);

    // Emits the 'storage' event to other tabs/windows
    window.dispatchEvent(new Event('storageContactList'));
    channel.postMessage('update');
  };

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="h-full w-full flex flex-col items-center justify-center px-4">
        <Container className="m-4">
          <h1 className="flex h-full items-center justify-center sm:py-10 py-6 px-4 text-4xl text-white-1">
            Seja bem-vindo, entre com um nickname:
          </h1>

          <InputSubmit
            onSubmit={handleSubmit}
            placeholder="Digite seu nome aqui..."
          />
        </Container>
        <span className="text-red-1">*O nickname não pode conter acentos</span>
      </main>
    </div>
  );
}
