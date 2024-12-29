import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/test.svg"
      alt="Creadive logo"
      width={0}
      height={0}
      sizes="100vw"
      className="w-full h-full"
      priority
    />
  );
};
