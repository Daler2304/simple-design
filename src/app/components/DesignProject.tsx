import { BsFiletypePdf } from "react-icons/bs";

export default function DesignProject() {
    return (
        <section id="planning" className="p-10 relative -top-25">
            <h2 className="text-[1.8rem] text-start font-bold mb-10">
                Дизайн проект <br />
                за 249 000kzt
            </h2>
            <p className="my-8 font-medium text-[15px] text-[#262626B2]">
                Срок выполнения: <span className="text-[#262626]">14 дней</span>
            </p>
            <p className="my-4 font-normal text-[#262626B2]">
                Разработаем планировочное решение вашей квартиры. На основе созданного
                планировочного решения мы подготовим альбом, состоящий из 9 чертежей, необходимых
                строителям для ремонта.
            </p>
            <div className="px-2 font-medium text-[1rem]">
                <li>1 чертеж планировочного решения</li>
                <li>3D модель квартиры в черно-белом цвете</li>
                <li>9 чертежей в альбоме</li>
            </div>
            <div className="flex flex-col items-start mt-12 gap-4">
                <a
                    href="#"
                    className="inline-block rounded-full bg-[#BD7048] px-12 py-6 text-[15px] font-semibold text-white"
                >
                    Оставить заявку
                </a>
                <p className="flex items-center gap-2 text-[#BD7048] font-semibold mt-4">
                    <BsFiletypePdf size={40} />
                    <span>Посмотреть пример</span>
                </p>
            </div>
        </section>
    );
}
