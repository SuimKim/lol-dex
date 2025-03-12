import Link from "next/link";

const Header = () => {
  const navLinks = [
    { href: "/", label: "홈" },
    { href: "/champions", label: "챔피언 목록" },
    { href: "/items", label: "아이템 목록" },
    { href: "/rotation", label: "챔피언 로테이션" },
  ];
  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 w-full">
      <nav className="flex justify-around">
        {navLinks.map((link, index) => (
          <Link className="hover:text-blue-500" key={index} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
