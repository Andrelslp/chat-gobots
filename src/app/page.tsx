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
    const registeredUsers: IUserDataProps[] = loginService.getUsers();

    // Checks if the user is already registered in the system
    if (registeredUsers && registeredUsers.length > 0) {
      const findName: boolean = registeredUsers.some(
        (item) => item.name.toLowerCase() === inputValue.toLowerCase()
      );

      if (findName) return console.error('Este nickname já está cadastrado!');
    }

    const newUser: IUserDataProps = {
      id: uuid(),
      name: inputValue
    };

    loginService.postUser(registeredUsers, newUser);
    router.push(`/chat/name=${inputValue}`);
  };

  return (
    <>
      <Header />
      <main className="content-area flex flex-col items-center justify-center">
        <Container>
          <h1 className="text-white-1 flex h-full items-center justify-center p-10 px-32 text-4xl">
            Seja bem-vindo, entre com um nickname:
          </h1>

          <InputSubmit
            onSubmit={handleSubmit}
            placeholder="Digite seu nome aqui..."
          />
        </Container>
      </main>
    </>
  );
}
