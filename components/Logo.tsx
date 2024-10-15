import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <img
        src="/Spend Sensei Logo W.png"
        alt="Spend Sensei Logo"
        className="h-20 md:h-28 cursor-pointer"
      />
    </Link>
  );
};

export default Logo;
