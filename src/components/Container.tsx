import { ReactNode } from 'react';

interface IContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: IContainerProps) {
  return (
    <div
      className={`bg-blue-2 flex w-full max-w-6xl flex-col justify-between rounded-3xl ${className}`}
    >
      {children}
    </div>
  );
}
