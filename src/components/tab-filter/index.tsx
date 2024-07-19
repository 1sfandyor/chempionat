import Image from "next/image";
import search from '@/public/icons/search.svg'


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
        <div className="flex pl-[35px] gap-[25px] w-fulll items-center pr-[88px] mb-[28px]">
            <div className="w-[20px] h-[20px]">
                <Image className="w-full h-full" src={search} alt="search icon" />
            </div>
            <ul className="flex items-center gap-[15px] text-[0.938rem] ">
                {tabs.map(({ title, value }, index) => (
                    <li className={`cursor-pointer font-medium leading-[17.9px] ${value !== value ? "text-black" : "text-black/40"}`} onClick={() => onTabChange(value)} key={index}>
                        {title}
                    </li>
                ))}
            </ul>
        </div>
    );
}