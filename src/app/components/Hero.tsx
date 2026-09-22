import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="relative h-full w-full">
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
            <div className="absolute inset-1 z-10 flex flex-col items-center justify-center">
                <h1 className="text-[40px] text-white font-semibold text-center">
                    Дизайн-проект для вашей квартиры <br /> за 2 недели и 199 000 ₸
                </h1>
                <a href="#" className="rounded-full bg-[#BD7048] px-12 py-6 mt-8 text-white text-[15px] font-semibold">
                    Консультация
                </a>
            </div>
        </section>
    );
}
