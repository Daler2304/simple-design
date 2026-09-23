import Image from "next/image";

export default function OurServices() {
    return (
        <section id="how-it-works" className="p-10 relative -top-35">
            <h2 className="text-[2rem] text-center font-bold mb-10">Наши услуги</h2>

            <div className="relative flex items-center justify-center">
                <Image
                    src="/positioning1.png"
                    alt="pos1"
                    width={100}
                    height={100}
                    sizes="100vw"
                    className="w-full h-auto"
                    loading="eager"
                />
                <Image
                    src="/positioning2.jpg"
                    alt="pos2"
                    width={100}
                    height={100}
                    sizes="100vw"
                    className="w-[75%] h-auto rotate-15 absolute top-1/2"
                />
            </div>
        </section>
    );
}
