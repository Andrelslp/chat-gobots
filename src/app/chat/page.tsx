'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Chat() {
  const router = useRouter();

  useEffect(() => {
    return router.push('/');
  }, []);

  return <div></div>;
}
