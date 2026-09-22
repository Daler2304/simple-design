import Image from "next/image";

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="px-30 p-10">
            <h2 className="text-[40px] font-bold mb-10">Как это работает?</h2>
            <div className="flex items-center">
                <div className="flex flex-col gap-8 mr-20">
                    <div className="flex justify-between p-2 w-110">
                        <p className="text-[70px] font-bold text-[#BD7048]/20 w-20">01</p>
                        <div className="flex flex-col flex-wrap gap-2 w-70">
                            <p className="text-[20px] font-medium">Выбор состава проекта</p>
                            <p className="text-[15px] text-black/70">
                                Выберите состав вашего проекта: только планировка или дизайн-проект
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between p-2 w-110">
                        <p className="text-[70px] font-bold text-[#BD7048]/20 w-20">02</p>
                        <div className="flex flex-col flex-wrap gap-2 w-70">
                            <p className="text-[20px] font-medium">Настройка проекта</p>
                            <p className="text-[15px] text-black/70">
                                Отметьте в корзине нужен ли вам профессиональный замер, подбор строительной бригады или
                                точный просчет сметы
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between p-2 w-110">
                        <p className="text-[70px] font-bold text-[#BD7048]/20 w-20">03</p>
                        <div className="flex flex-col flex-wrap gap-2 w-70">
                            <p className="text-[20px] font-medium">Создание чертежей</p>
                            <p className="text-[15px] text-black/70">
                                Наши дизайнеры спроектируют интерьер, подготовят чертежи.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <Image
                        src="/how-it-works.png"
                        alt="img"
                        width={321}
                        height={414}
                        sizes="100vw"
                        className="w-80.25 h-103.5 object-cover rounded-[20px]"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
