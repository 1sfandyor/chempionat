'use client'
import Image from "next/image";
import NavLink from "../Custom/NavLink";
import { usePathname, useSearchParams } from "next/navigation";

export type TTab = {
    title: string;
    value: string;
};

export type TableTabFilterProps = {
    tabs: TTab[];
    value: string;
    onTabChange: (newValue: string) => void;
    search?: boolean;
    className?: string;
    nickname?: string;
};

export function TableTabFilter({ tabs, value, onTabChange, search, className, nickname }: TableTabFilterProps) {
    const path = usePathname(); // Get the current pathname
    const searchParams = useSearchParams(); // Get the current search parameters
    const tabParam = searchParams.get('tab'); // Get the 'tab' parameter from the URL

    return (
        <div className={`flex ${className ? 'px-0' : 'px-[35px]'} gap-[25px] w-[540px] items-center mb-[28px]`}>
            {search && (
                <button className="w-[20px] h-[20px] cursor-pointer">
                    <Image src='icons/search.svg' width={20} height={20} className="w-full h-full hover:opacity-50 transition-all duration-200 active:opacity-100" alt="search icon" />
                </button>
            )}
            <ul className="flex items-center gap-[15px] text-[0.938rem]">
                {tabs.map(({ title, value: tabValue }, index) => {
                    // Check if the current tab should be selected based on tabParam
                    const isSelected = tabParam === tabValue;
                    
                    return (
                        <li key={index}
                            className={`cursor-pointer hover:text-black transition-all duration-200 font-medium leading-[17.9px] ${isSelected ? 'text-black' : 'text-black/40'}`}
                            onClick={() => onTabChange(tabValue)} >
                            <NavLink href={nickname ? `/profile/@${nickname}?tab=${tabValue}` : `?tab=${tabValue}`}>
                                {title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
