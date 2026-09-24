"use client";

import { useState } from "react";
import Image from "next/image";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const articles = {
    living_room: {
        name: "Гостиные",
        items: [
            { id: 1, name: "Акварель", img: "/acvarel.png" },
            { id: 2, name: "Ира", img: "/ira.png" },
            { id: 3, name: "Нурс", img: "/nurs.png" },
        ],
    },

    children_room: {
        name: "Детские",
        items: [
            { id: 4, name: "Синяя", img: "/sinya.png" },
            { id: 5, name: "Розовая", img: "/rozovya.png" },
            { id: 6, name: "Яркая", img: "/yarkaya.png" },
        ],
    },

    coridors: {
        name: "Коридоры - прихожие",
        items: [
            { id: 7, name: "Ирина", img: "/irina.png" },
            { id: 8, name: "Акварель", img: "/acvarel-coridor.png" },
            { id: 9, name: "Кадыр", img: "/cadir.png" },
        ],
    },
};

function StyleCarousel({
    name,
    items,
}: {
    name: string;
    items: {
        id: number;
        name: string;
        img: string;
    }[];
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    const previous = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    return (
        <div className="mb-14">
            <div className="flex items-center gap-2 my-8">
                <h3 className="text-[1.2rem] font-medium min-w-max">{name}</h3>

                <hr className="w-full h-px border-t border-stone-700/40" />
            </div>

            <div className="relative overflow-hidden">
                <div
                    className="flex"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {items.map((item) => (
                        <div key={item.id} className="min-w-full shrink">
                            <div className="relative h-[40vw] w-full">
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="rounded-[20px] object-cover object-center"
                                    loading="eager"
                                />

                                <button
                                    onClick={previous}
                                    className="absolute left-2 top-1/2 -translate-y-1/2
                                        w-10 h-10 rounded-full bg-white/90
                                        flex items-center justify-center shadow-md cursor-pointer"
                                    aria-label="Предыдущий"
                                >
                                    <PiCaretLeft className="text-xl" />
                                </button>

                                <button
                                    onClick={next}
                                    className="absolute right-2 top-1/2 -translate-y-1/2
                                        w-10 h-10 rounded-full bg-white/90
                                        flex items-center justify-center shadow-md cursor-pointer"
                                    aria-label="Следующий"
                                >
                                    <PiCaretRight className="text-xl" />
                                </button>
                            </div>

                            <div className="flex justify-between items-center p-4">
                                <p className="text-[1rem] font-medium pl-2">{item.name}</p>

                                <button className="flex items-center justify-center bg-gray-100 w-37.5 h-14 rounded-full gap-2  cursor-pointer">
                                    <HiOutlineShoppingBag className="text-xl" />

                                    <span className="text-[#BD7048] text-[1rem] font-semibold">Выбрать</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function OurStyles() {
    return (
        <section id="our-styles" className="p-10">
            <h2 className="text-[1.8rem] text-center font-bold mb-10">Наши стили</h2>

            {Object.values(articles).map((section) => (
                <StyleCarousel key={section.name} name={section.name} items={section.items} />
            ))}
            <div className="flex flex-col justify-center items-center">
                <a
                    href="#"
                    className="inline-block rounded-full bg-[#BD7048] w-max px-12 py-6 mb-12 text-white text-[15px] font-semibold"
                >
                    К каталогу стилей
                </a>
            </div>
        </section>
    );
}
