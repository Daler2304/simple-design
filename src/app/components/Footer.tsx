import { BsTelephone } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="flex flex-col">
            <div className="flex w-full py-8 px-4">
                <div className="text-center flex-1">
                    <p className="font-semibold">
                        Simple <span className="text-[#BD7048] text-[15px]">Design</span>
                    </p>
                    <p className="text-[10px]">дизайн интерьера</p>
                </div>

                <div className="flex-1 sm:flex justify-center hidden">
                    <nav className="flex flex-col text-[#21212180] text-[15px] font-medium">
                        <a href="/">Главная</a>
                        <a href="#">Тест</a>
                        <a href="#">О нас</a>
                        <a href="#">Цены</a>
                    </nav>
                </div>

                <div className="flex-[1.2] hidden sm:flex flex-col text-[#21212180] font-medium">
                    <a href="#">Политика конфиденциальности</a>
                    <a href="#">Условия пользования</a>
                </div>

                <div className="flex-1 flex justify-center">
                    <div className="flex items-center h-max">
                        <BsTelephone className="text-xl" />
                        <div className="text-center text-[15px]">
                            <p className="font-semibold">+7 700 505 3000</p>
                            <p className="text-[#3B3B3B80] font-medium">с 9:00 до 18:00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black/90 text-white text-center py-4">
                &copy; {new Date().getFullYear()}. Никакие права не защищены.
                <p className="italic text-stone-400">
                    Powered by <span className="text-[#BD7048]">Daler</span>
                </p>
            </div>
        </footer>
    );
}
