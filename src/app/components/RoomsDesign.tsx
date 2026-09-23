import Image from "next/image";
import Link from "next/link";
import { PiHandbag } from "react-icons/pi";

const articles = {
    living_room: {
        name: "Гостиные",
        items: [
            {
                id: 1,
                name: "Акварель",
                img: "/acvarel.png",
            },
            {
                id: 2,
                name: "Ира",
                img: "/ira.png",
            },
            {
                id: 3,
                name: "Нурс",
                img: "/nurs.png",
            },
        ],
    },

    children_room: {
        name: "Детские",
        items: [
            {
                id: 4,
                name: "Синяя",
                img: "/sinya.png",
            },
            {
                id: 5,
                name: "Розовая",
                img: "/rozovya.png",
            },
            {
                id: 6,
                name: "Яркая",
                img: "/yarkaya.png",
            },
        ],
    },
    coridors: {
        name: "Коридоры - прихожие",
        items: [
            {
                id: 7,
                name: "Ирина",
                img: "/irina.png",
            },
            {
                id: 8,
                name: "Акварель",
                img: "/acvarel-coridor.png",
            },
            {
                id: 9,
                name: "Кадыр",
                img: "/cadir.png",
            },
        ],
    },
};

export default function RoomsDesign() {
    return (
        <section id="rooms-design" className="px-30 p-10">
            <h2 className="text-[40px] text-center font-bold mb-6">Дизайн комнат</h2>
            <div className="flex justify-center w-full">
                <p className="w-full text-center text-[18px] font-medium text-black/60">
                    Выбирая дизайн комнаты, вы получаете смету со списком всех предметов в
                    интерьере, названиями, артикулами, цветом стен и так далее.
                </p>
            </div>

            {Object.entries(articles).map(([roomKey, room]) => (
                <div id={roomKey} className="w-full" key={roomKey}>
                    <div className="flex items-center gap-4 my-8">
                        <h3 className="text-[30px] font-medium min-w-max">{room.name}</h3>
                        <hr className="w-full h-px border-t border-stone-700/40" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {room.items.map((item) => (
                            <div className="w-full max-w-100" key={item.id}>
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    width={400}
                                    height={220}
                                    className="rounded-[20px] w-full h-55 object-cover object-left"
                                />

                                <div className="flex justify-between items-center p-4">
                                    <p className="text-[20px] font-medium pl-2">{item.name}</p>

                                    <button className="flex items-center justify-center bg-gray-100 w-37.5 h-14 rounded-full gap-2">
                                        <PiHandbag className="text-xl" />

                                        <span className="text-[#BD7048] text-[15px] font-semibold">
                                            Выбрать
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className="flex justify-center my-16">
                <Link
                    href=""
                    className="bg-[#BD7048] text-white font-semibold w-71.25 h-18 flex items-center justify-center rounded-full"
                >
                    К каталогу комнат
                </Link>
            </div>
        </section>
    );
}
