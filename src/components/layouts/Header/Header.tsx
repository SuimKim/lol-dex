import Link from "next/link";
import { CHAMPION, HOME, ITEMS, ROTATIONS } from "@/constants";
import DarkToggle from "./DarkToggle";

const Header = () => {
  const navLinks = [
    { href: HOME, label: "홈" },
    { href: CHAMPION, label: "챔피언" },
    { href: ITEMS, label: "아이템" },
    { href: ROTATIONS, label: "로테이션" },
  ];
  return (
    <header className="bg-gray-800 dark:bg-black text-white p-4 fixed top-0 w-full z-10">
      <nav className="flex justify-around">
        {navLinks.map((link, index) => (
          <Link
            className="hover:text-blue-500 text-sm lg:text-lg"
            key={index}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
        <DarkToggle />
      </nav>
    </header>
  );
};

export default Header;
