import React from 'react';

interface Props {
    type: string;
    placeholder: string;
    name: string;
    handler:(e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = (props:Props) => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            className={`w-full p-2 px-4 border-2 border-gray-300 rounded-md focus:outline-blue-500`}
            required={true}
            onChange={props.handler}
        />
    );
};

export default FormInput;