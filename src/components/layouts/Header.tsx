import Link from "next/link";

const Header = () => {
  const navLinks = [
    { href: "/", label: "홈" },
    { href: "/champions", label: "챔피언" },
    { href: "/items", label: "아이템" },
    { href: "/rotation", label: "로테이션" },
  ];
  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
      <nav className="flex justify-around">
        {navLinks.map((link, index) => (
          <Link
            className="hover:text-blue-500 text-sm"
            key={index}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
