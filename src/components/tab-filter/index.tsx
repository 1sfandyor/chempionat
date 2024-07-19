'use client'
import Image from "next/image";
import Link from "next/link";
import NavLink from "../Custom/NavLink";


export type TTab = {
    title: string;
    value: string;
};

export type TableTabFilterProps = {
    tabs: TTab[];
    value: string;
    onTabChange: (newValue: string) => void;
};

export function TableTabFilter({
    tabs,
    onTabChange
}: TableTabFilterProps) {
    return (
        <div className="flex px-[35px] gap-[25px] w-[540px] items-center mb-[28px]">
            <button className="w-[20px] h-[20px] cursor-pointer">
                <Image src='icons/search.svg' width={20} height={20} className="w-full h-full" alt="search icon" />
            </button>
            <ul className="flex items-center gap-[15px] text-[0.938rem]">
                {tabs.map(({ title, value }, index) => (
                    <li className={`cursor-pointer font-medium leading-[17.9px] ${value !== value ? "text-black" : "text-black/40"}`} onClick={() => onTabChange(value)} key={index}>
                        <NavLink href={`?tab=${title}`}>
                            {title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}