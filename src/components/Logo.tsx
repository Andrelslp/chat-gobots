interface ILogoProps {
  onClick?: () => void;
}

export default function Logo({ onClick }: ILogoProps) {
  return (
    <div>
      <span className="text-6xl font-bold text-white-1" onClick={onClick}>
        Chat
      </span>
      <span className="text-6xl font-bold text-blue-3" onClick={onClick}>
        GoBots
      </span>
    </div>
  );
}
