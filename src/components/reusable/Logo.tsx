import Image from "next/image";

interface ILogoProps {
  styles?: string;
}

export const Logo: React.FC<ILogoProps> = ({ styles }) => {
  return (
    <Image
      src="/logo-2.png"
      alt="Creadive logo"
      width={0}
      height={0}
      sizes="100vw"
      className={`w-[90%] h-auto ${styles}`}
      priority
    />
  );
};
