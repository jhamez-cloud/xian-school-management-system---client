import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavLink = ({href,children}:{href:string,children:React.ReactNode}) => {

    const path = usePathname()
    const isActive = path === href;

    return (
       <Link href={href} className={`text-xl font-medium ${isActive?`text-white underline font-bold`:`text-gray-400 hover:text-white`}`}>{children}</Link>
    );
};

export default NavLink;