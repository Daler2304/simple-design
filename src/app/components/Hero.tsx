import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Hero() {
    return (
        <section id="hero" className="relative w-full h-full">
            <Image
                src="/hero.jpg"
                alt="Hero"
                sizes="100vw"
                width={100}
                height={100}
                className="object-cover object-bottom h-[83vh] w-full"
                loading="eager"
            />
            <div className="absolute inset-0 bg-[#68686880]" />

            {/* shop button */}
            <div className="md:hidden absolute top-6 right-6 z-11 rounded-full bg-gray-50 p-4 flex items-center justify-center text-xl">
                <HiOutlineShoppingBag />
            </div>

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                <h1 className="md:text-[40px] text-[6vw] text-white font-semibold text-center px-10">
                    Дизайн-проект для вашей квартиры <br />
                    за 2 недели и 199 000 ₸
                </h1>
                <a
                    href="#"
                    className="rounded-full bg-[#BD7048] px-12 py-6 mt-8 text-white text-[15px] font-semibold"
                >
                    Консультация
                </a>
            </div>
        </section>
    );
}
