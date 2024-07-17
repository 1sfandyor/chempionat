import { ButtonsType } from "@/interfaces/button.interface";
import Link from "next/link";
import { FC } from "react";

export const Button: FC<{button: ButtonsType}> = ({button}) => {

    const classes = `relative inline-flex items-center justify-center transition-colors text-white ${button.className as string} ${button.px as string} ${button.py as string}`;
    const spanClass = `relative font-semibold text-nowrap flex item-center justify-center`;


    const renderButton = () => (
        <button className={classes} onClick={button.onClick} type='button'>
            <span className={`${spanClass} ${button.spanClasses}`}>{button.text}</span>
        </button>
    )

    const renderLink = () => (
        <Link className={classes} href={button.href as string}>
            <span className={`${spanClass} ${button.spanClasses}`}>{button.text}</span>
        </Link>
    )

    return button.href
    ? renderLink()
    : renderButton()
}
