import React from 'react';
import Link from "next/link";
import RegisterForm from "@/app/components/RegisterForm";

const Page = () => {
    return (
        <div className={`w-full flex flex-col items-center pt-24`}>
            <RegisterForm/>
        </div>
    );
};

export default Page;