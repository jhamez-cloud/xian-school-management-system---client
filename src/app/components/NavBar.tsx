import React from 'react';
import navLink from "@/app/components/ui/NavLink";
import Link from "next/link";
import * as url from "node:url";
import NavLink from "@/app/components/ui/NavLink";

interface Props {
    username: string | undefined;
    email: string | undefined;
}

const NavBar = (props:Props) => {
    return (
        <nav className={`w-1/6 h-full bg-blue-950 px-2 py-4`}>
            <h1 className={`text-3xl font-bold text-white mb-4`}>Welcome Back,</h1>
            <p className={`text-white font-semibold`}>{props.username?.toUpperCase()}</p>
            <p className={`text-blue-400 cursor-pointer`}>{props.email}</p>
            <figure className={`w-full my-2 flex flex-col mt-8`}>
                <img src="/images/img_1.jpeg" alt="profile_image" className={`w-[120px] h-[120px] rounded-full`}/>
                <figcaption className={`text-blue-400 underline cursor-pointer`}>Change Profile</figcaption>
            </figure>
            <ul className={`w-full flex flex-col justify-center mt-8 space-y-6`}>
                <li className={`w-full flex items-center space-x-2`}>
                    <img src="/logo/home.png" alt=""/>
                    <NavLink href={`/Dashboard`} children={`Dashboard`}/>
                </li>
                <li className={`w-full flex items-center space-x-2`}>
                    <img src="/logo/messages.png" alt=""/>
                    <NavLink href={`/Messages`} children={`Messages`}/>
                </li>
                <li className={`w-full flex items-center space-x-2`}>
                    <img src="/logo/user.png" alt=""/>
                    <NavLink href={`/Users`} children={`Users`}/>
                </li>
                <li className={`w-full flex items-center space-x-2`}>
                    <img src="/logo/notification.png" alt=""/>
                    <NavLink href={`/Notifications`} children={`Notifications`}/>
                </li>
                <li className={`w-full flex items-center space-x-2`}>
                    <img src="/logo/attendance.png" alt=""/>
                    <NavLink href={`/Attendance`} children={`Lecture Attendance`}/>
                </li>
                <li className={`w-full flex items-center space-x-2`}>
                    <img src="/logo/schedule.png" alt=""/>
                    <NavLink href={`/Schedules`} children={`Schedules`}/>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;