"use client";

import { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";

const questions = [
    {
        id: 1,
        quest: "Вопрос",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada nibh at ornare turpis sit lacus, in viverra volutpat.",
    },
    {
        id: 2,
        quest: "Вопрос",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada nibh at ornare turpis sit lacus, in viverra volutpat.",
    },
    {
        id: 3,
        quest: "Вопрос",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada nibh at ornare turpis sit lacus, in viverra volutpat.",
    },
    {
        id: 4,
        quest: "Вопрос",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada nibh at ornare turpis sit lacus, in viverra volutpat.",
    },
];

export default function Faq() {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggleQuestion = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="relative w-full mb-10">
            <h2 className="text-[1.8rem] text-center font-bold mb-10">Часто задаваемые вопросы</h2>

            <div className="flex flex-col items-center w-full gap-4">
                {questions.map((item) => {
                    const isOpen = openId === item.id;

                    return (
                        <div className="w-[80vw]" key={item.id}>
                            <button
                                onClick={() => toggleQuestion(item.id)}
                                className="bg-gray-100 w-full rounded-full flex items-center py-2 px-4 text-left cursor-pointer"
                            >
                                {isOpen ? (
                                    <IoCloseCircleOutline className="text-2xl mr-2 text-[#BD7048]" />
                                ) : (
                                    <AiOutlinePlusCircle className="text-2xl mr-2" />
                                )}

                                {item.quest}
                            </button>

                            {isOpen && <div className="px-5 py-4 text-gray-600">{item.ans}</div>}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
