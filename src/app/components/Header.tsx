import React from 'react';

const Header = () => {
    return (
        <div className={`w-full h-[50px] bg-white flex px-2 items-center space-x-[60%] fixed z-20`}>
            <h1 className={`text-gray-700 text-lg font-light`}>Xian School Manager</h1>
            <button className={`w-[150px] h-[40px] cursor-pointer bg-red-500 text-white text-lg rounded-md z-40`}>Sign Out</button>
        </div>
    );
};

export default Header;