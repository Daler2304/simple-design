"use client";

import { useState } from "react";
import { BsTelephone } from "react-icons/bs";

const menu = ["Главная", "Тест", "Каталог", "О нас", "Цены"];

export default function Header() {
    const [active, setActive] = useState(0);

    return (
        <header className="mt-8 flex items-center justify-around">
            <div className="text-center">
                <p className="font-semibold">
                    Simple <span className="text-[15px] text-[#BD7048]">Design</span>
                </p>

                <p className="text-[10px]">дизайн интерьера</p>
            </div>

            <div>
                <nav className="flex gap-12 text-[15px]">
                    {menu.map((item, index) => {
                        const isActive = active === index;
                        const isFirst = index === 0;
                        const isLast = index === menu.length - 1;

                        return (
                            <a
                                key={item}
                                href="#"
                                onClick={() => setActive(index)}
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
                                {item}
                            </a>
                        );
                    })}
                </nav>
            </div>

            <div className="flex items-center">
                <BsTelephone className="text-xl" />

                <div className="text-center text-[15px]">
                    <p className="font-semibold">+7 700 505 3000</p>
                    <p className="text-black/60 font-medium">с 9:00 до 18:00</p>
                </div>
            </div>
        </header>
    );
}
