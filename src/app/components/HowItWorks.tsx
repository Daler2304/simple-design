import Image from "next/image";
import { AiOutlineFieldTime, AiOutlineCheckSquare } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="md:px-30 p-10 relative -top-35 md:top-0">
            {/* over hero block */}
            <div className="md:hidden flex justify-center">
                <div className="rounded-t-[15vw] bg-gray-50 w-full h-max p-[8vw]">
                    <div className="flex justify-around">
                        <div className="flex flex-col justify-center items-center h-max">
                            <AiOutlineFieldTime className="text-5xl text-[#BD7048]" />
                        </div>
                        <div className="flex flex-col justify-center w-[70%] h-max px-4">
                            <p className="text-[1.2rem] md:text-[20px] text-[#262626] font-medium">
                                2 недели
                            </p>
                            <p className="text-[0.8rem] md:text-[15px] text-[#262626]/70 font-medium">
                                срок выполнения заказа
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-around mt-12">
                        <div className="flex flex-col justify-center items-center h-max">
                            <AiOutlineCheckSquare className="text-5xl text-[#BD7048]" />
                        </div>
                        <div className="flex flex-col justify-center w-[70%] h-max px-4">
                            <p className="text-[1.2rem] md:text-[20px] text-[#262626] font-medium">
                                Не важно
                            </p>
                            <p className="text-[0.8rem] sm:text-[15px] text-[#262626]/70 font-medium">
                                сколько квадратов - цена одна
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-around mt-12">
                        <div className="flex flex-col justify-center items-center h-max">
                            <IoWalletOutline className="text-5xl text-[#BD7048]" />
                        </div>

                        <div className="flex flex-col justify-center w-[70%] h-max px-4">
                            <p className="text-[1.2rem] md:text-[20px] text-[#262626] font-medium">
                                Рассрочка
                            </p>
                            <p className="text-[0.8rem] md:text-[15px] text-[#262626]/70 font-medium">
                                до 24 месяцев
                            </p>
                            <p className="flex items-center">
                                <Image
                                    src="/Logo_of_Kaspi_bank.png"
                                    alt=""
                                    width={10}
                                    height={10}
                                    sizes="100vw"
                                    className="w-6.25 h-auto object-cover rounded-[20px]"
                                    loading="lazy"
                                />
                                <span className="font-bold">Kaspi.kz</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="sm:text-[40px] text-[1.5rem] text-center sm:text-start font-bold sm:mt-0 mt-15 mb-10">
                Как это работает?
            </h2>
            <div className="flex items-center">
                <div className="flex flex-col gap-8 mr-20">
                    <div className="flex justify-between p-2 w-full sm:w-110 relative">
                        <p className="text-[70px] font-bold text-[#BD7048]/20 w-20 absolute -top-2 -left-2 sm:left-0 sm:top-0 sm:relative">
                            01
                        </p>
                        <div className="flex flex-col flex-wrap gap-2 w-70 relative left-2 sm:left-0">
                            <p className="text-[20px] font-medium">Выбор состава проекта</p>
                            <p className="text-[15px] text-black/70">
                                Выберите состав вашего проекта: только планировка или дизайн-проект
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between p-2 w-full sm:w-110 relative">
                        <p className="text-[70px] font-bold text-[#BD7048]/20 w-20 absolute -top-2 -left-2 sm:left-0 sm:top-0 sm:relative">
                            02
                        </p>
                        <div className="flex flex-col flex-wrap gap-2 w-70 relative left-2 sm:left-0">
                            <p className="text-[20px] font-medium">Настройка проекта</p>
                            <p className="text-[15px] text-black/70">
                                Отметьте в корзине нужен ли вам профессиональный замер, подбор
                                строительной бригады или точный просчет сметы
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between p-2 w-full sm:w-110 relative">
                        <p className="text-[70px] font-bold text-[#BD7048]/20 w-20 absolute -top-2 -left-2 sm:left-0 sm:top-0 sm:relative">
                            03
                        </p>
                        <div className="flex flex-col flex-wrap gap-2 w-70 relative left-2 sm:left-0">
                            <p className="text-[20px] font-medium">Создание чертежей</p>
                            <p className="text-[15px] text-black/70">
                                Наши дизайнеры спроектируют интерьер, подготовят чертежи.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full hidden md2:block">
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
