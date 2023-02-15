import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-14 w-full items-center justify-center border-b bg-white/30 backdrop-blur">
      <div className="flex w-full max-w-4xl justify-between">
        <Link href={"/"}>
          <button type="button">
            <Image src="/logo.png" alt="logo" width={64} height={64} />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
