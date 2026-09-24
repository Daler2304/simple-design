import Image from "next/image";

export default function Test() {
    return (
        <section className="relative w-full h-[50vh] sm:h-[40vh] mb-10">
            <Image
                src="/test-bg.png"
                alt="test"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center"
            />

            <div className="absolute inset-0 p-8 flex flex-col items-start">
                <h2 className="text-white text-[1.5rem] font-semibold py-4">Давайте определим, что вам нравится</h2>

                <p className="text-white/70 pb-4">
                    Пройдите короткий тест и мы покажем подходящие вам стилевые решения
                </p>

                <div className="w-full flex flex-col justify-center items-center">
                    <a
                        href="#"
                        className="inline-block rounded-full bg-[#BD7048] w-max px-12 py-6 mb-12 text-white text-[15px] font-semibold"
                    >
                        Пройти тест
                    </a>
                </div>
            </div>
        </section>
    );
}
