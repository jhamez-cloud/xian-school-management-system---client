import React from 'react';

interface Props {
    number: string;
    itemName: string;
    backColor: any;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Card = (props:Props) => {
    return (
        <div className={`${props.backColor} flex flex-col items-center justify-center cursor-pointer col-span-1 text-shadow-lg`}>
            <p className={`text-center font-semibold text-3xl text-white`}>{props.number}</p>
            <p className={`text-white font-light text-center`}>{props.itemName}</p>
        </div>
    );
};

export default Card;