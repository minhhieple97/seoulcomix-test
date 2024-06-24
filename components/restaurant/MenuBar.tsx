import React from "react";
import { HomeIcon } from "../ui/HomeIcon";
import { SearchIcon } from "../ui/SearchIcon";
import { MessageIcon } from "../ui/MessageIcon";
import { CaledarIcon } from "../ui/CalendarIcon";
import { AlignIcon } from "../ui/AlignIcon";

interface MenuItem {
  id: number;
  title: string;
  link: string;
  icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "홈",
    link: "/",
    icon: <HomeIcon className="h-[26px] w-[26px]" />,
  },
  {
    id: 2,
    title: "검색",
    link: "/about",
    icon: <SearchIcon className="h-[26px] w-[26px]" />,
  },
  {
    id: 3,
    title: "피드",
    link: "/services",
    icon: <MessageIcon className="h-[26px] w-[26px]" />,
  },
  {
    id: 4,
    title: "내 예약",
    link: "/contact",
    icon: <CaledarIcon className="h-[26px] w-[26px]" />,
  },
  {
    id: 5,
    title: "메뉴",
    link: "/contact",
    icon: <AlignIcon className="h-[26px] w-[26px]" />,
  },
];

export const MenuBar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 block bg-white text-white sm:hidden">
      <ul className="flex justify-evenly pb-2">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="flex cursor-pointer flex-col items-center justify-center gap-1 p-1"
          >
            {item.icon}
            <a href={item.link} className="text-menubar block text-xs">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
