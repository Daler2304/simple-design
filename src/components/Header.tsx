"use client";

import { usePathname } from "next/navigation";
import { BsTelephone } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";

const menu = [
    {
        id: 1,
        name: "Главная",
        url: "/",
    },
    {
        id: 2,
        name: "Тест",
        url: "/test",
    },
    {
        id: 3,
        name: "Каталог",
        url: "/catalog",
    },
    {
        id: 4,
        name: "О нас",
        url: "/about",
    },
    {
        id: 5,
        name: "Цены",
        url: "/price",
    },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="m-8 sm:m-0 sm:mx-8 sm:mt-8 flex items-center md:justify-around justify-between">
            {/* logo */}
            <div className="md:text-center">
                <p className="font-semibold">
                    Simple <span className="text-[15px] text-[#BD7048]">Design</span>
                </p>

                <p className="text-[10px]">дизайн интерьера</p>
            </div>

            {/* burger menu */}
            <div className="md:hidden flex text-3xl">
                <CgMenuRight className="font-extrabold" />
            </div>

            {/* navigation */}
            <div className="hidden md:block">
                <nav className="flex gap-8 text-[15px]">
                    {menu.map((item, index) => {
                        const isActive =
                            item.url === "/"
                                ? pathname === "/"
                                : pathname === item.url || pathname.startsWith(`${item.url}/`);

                        const isFirst = index === 0;
                        const isLast = index === menu.length - 1;

                        return (
                            <a
                                key={item.id}
                                href={item.url}
                                className={`
                                    relative inline-block
                                    transition-colors duration-200
                                    ${isActive ? "font-semibold text-[#BD7048]" : "text-black/60"}

                                    after:absolute
                                    after:-bottom-1
                                    after:h-0.5
                                    after:bg-[#BD7048]
                                    after:transition-all
                                    after:duration-300

                                    ${
                                        isActive
                                            ? isFirst
                                                ? "after:right-0 after:w-1/2"
                                                : isLast
                                                  ? "after:left-0 after:w-1/2"
                                                  : "after:left-1/2 after:-translate-x-1/2 after:w-full"
                                            : isFirst
                                              ? "after:right-0 after:w-0"
                                              : isLast
                                                ? "after:left-0 after:w-0"
                                                : "after:left-1/2 after:-translate-x-1/2 after:w-0"
                                    }
                                `}
                            >
                                {item.name}
                            </a>
                        );
                    })}
                </nav>
            </div>

            {/* tel */}
            <div className="hidden md:flex items-center">
                <BsTelephone className="text-xl" />

                <div className="text-center text-[15px]">
                    <p className="font-semibold">+7 700 505 3000</p>
                    <p className="text-black/60 font-medium">с 9:00 до 18:00</p>
                </div>
            </div>
        </header>
    );
}
