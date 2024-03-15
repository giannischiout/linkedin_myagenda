'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

export const GhostIconButton = ({
    Icon,
    iconColor,
    label,
    number,
    underline,
    href = "#",
}) => {
    // const [currentNumber, setCurrentNumber] = useState(number - 10 || 0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (currentNumber < number) {
    //             setCurrentNumber(prevNumber => prevNumber + 1);
    //         }
    //     }, 20 );

    //     return () => clearInterval(interval);
    // }, [currentNumber, number]);
    return (
        <Link className="ghost_iconbtn" href={href}>
            {/* {Icon && <Icon style={{color: iconColor}} />} */}
            <Icon.type {...Icon.props} style={{color: iconColor}}/>
            <span className={underline ? 'hasUnderline' : null}>
                <b>{`${number}`}</b>{` ${label}`}
            </span>
        </Link>
    );
};