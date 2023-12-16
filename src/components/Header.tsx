import { useRouter } from 'next/navigation';
import Logo from './Logo';

export default function Header() {
  const router = useRouter();

  return (
    <header className="w-screen bg-dark-3 px-10 py-4">
      <Logo onClick={() => router.push('/')} />
    </header>
  );
}
