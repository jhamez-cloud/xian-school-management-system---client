import React from 'react';

interface Props {
    image: string;
    name: string;
    index: string;
    level: number;
    gpa: number;
}

const StudentCard = (props:Props) => {
    return (
        <figure className={`col-span-1 w-full rounded-md h-[365px] flex flex-col items-center space-y-2 bg-[rgba(0,0,0,0.1)]`} style={{boxShadow:"0 0 10px rgba(0,0,0,0.5)"}}>
            <img src={props.image} alt={props.name} className={`w-full h-2/3 rounded-tl-md rounded-tr-md`}/>
            <figcaption className={`w-full px-2`}>
                <h1 className={`text-lg font-medium`}>{props.name}</h1>
                <h2 className={`font-light truncate overflow-x-clip`}><span className={`font-bold`}>ID: </span>{props.index.split("").splice(2,11)}</h2>
                <div className={`w-full flex justify-between items-center `}>
                    <p className={`font-light`}><span className={`font-bold`}>Level: </span>{props.level}</p>
                    <p className={`font-light`} title={`Students GPA`}>{props.gpa}</p>
                </div>
                <div className={`w-full flex justify-center space-x-6 items-center pt-2`}>
                    <button className={`px-2 rounded-sm text-white text-shadow-lg bg-blue-400`} style={{boxShadow:"0 0 10px rgba(0,0,0,0.5)"}}>Update</button>
                    <button className={`px-2 rounded-sm text-white text-shadow-lg bg-red-400`} style={{boxShadow:"0 0 10px rgba(0,0,0,0.5)"}}>Delete</button>
                </div>
            </figcaption>
        </figure>
    );
};

export default StudentCard;