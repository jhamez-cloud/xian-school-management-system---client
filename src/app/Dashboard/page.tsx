"use client";

import React, {useState, useEffect, useContext} from "react";
import NavBar from "@/app/components/NavBar";
import Banner from "@/app/components/Banner";
import Card from "@/app/components/Card";
import {StateContext} from "@/context/StateContext";
import {router} from "next/client";

const Page = () => {

    const context = useContext(StateContext);
    if(!context) {
        throw new Error("No context provided");
    }

    const {userData,setUserData} = context;
    //const {userData,setUserData} = useAuth(true);

   // const [userData, setUserData] = useState<Admin | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const getAdmin = async () => {
            try {
                setLoading(true);
                const res = await fetch("http://localhost:8080/api/auth/user", {
                    method: "GET",
                    credentials: "include", // send cookie
                    headers: { "Content-Type": "application/json" },
                });

                if (!res.ok) {
                    console.error("Failed to fetch user");
                }

                const data = await res.json();
                setUserData(data); // actually save user
                console.log("Fetched user:", data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getAdmin();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="w-full h-full border-t-16 border-t-blue-400 flex space-x-8">
            <NavBar email={userData.user?.email} username={userData.user?.userName}/>
            <section className={`w-5/6 h-full py-4 pt-0 space-y-2 bg-white overflow-y-scroll relative`}>
                <div className={`w-full h-[50px] bg-white flex px-2 items-center space-x-[60%] fixed mb-4 z-20`}>
                    <h1 className={`text-gray-700 text-lg font-light`}>Xian School Manager</h1>
                    <button className={`w-[150px] h-[40px] cursor-pointer bg-red-500 text-white text-lg rounded-md z-40`}>Sign Out</button>
                </div>
                <Banner/>
                <section className={`w-full h-[180px] grid grid-cols-[repeat(4,23.8%)] grid-rows-[repeat(1,95%)] gap-4`}>
                    {
                        [
                            {
                                color:"bg-blue-950",
                                number:userData.studentCount?.toString(),
                                name:"STUDENTS",
                            },
                            {
                                color:"bg-blue-500",
                                number:userData.lecturerCount?.toString(),
                                name:"TEACHERS"
                            },
                            {
                                color:"bg-green-400",
                                number:"15",
                                name:"DEPARTMENTS"
                            },
                            {
                                color:"bg-orange-400",
                                number:"50",
                                name:"NON-TEACHING-STAFF"
                            }
                        ].map((card, index) =>(
                            <Card key={index} number={card.number} backColor={card.color} itemName={card.name}/>
                        ))
                    }
                </section>
                <section className={`w-full py-2 pr-4 flex space-x-4`}>
                    <div className={`w-2/3 h-[340px] p-4 border-t-4 border-2 rounded-md border-gray-300 shadow-md border-t-blue-950`}>
                        <h1 className={`text-xl font-bold mb-3 text-blue-950`}>NOTICEBOARD</h1>
                        <div className={`w-full h-0.5 bg-gray-400 mb-2`}></div>
                        <div className={`w-full border-b-2 border-b-gray-300 border-l-4 border-l-orange-300 px-2 mb-1`}>
                            <h1 className={`text-lg font-medium`}>Increase In School Fees</h1>
                            <p className={`font-light text-lg`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa distinctio eaque eli?</p>
                            <p className={`font-medium`}>Posted on: <span className={`text-gray-400`}>1 Jan 2025</span></p>
                        </div>
                        <div className={`w-full border-b-2 border-b-gray-300 border-l-4 border-l-lime-300 px-2 mb-1`}>
                            <h1 className={`text-lg font-medium`}>Introducing Cybersecurity Programme</h1>
                            <p className={`font-light text-lg`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa distinctio eaque eli?</p>
                            <p className={`font-medium`}>Posted on: <span className={`text-gray-400`}>4 Apr 2025</span></p>
                        </div>
                        <div className={`w-full border-b-2 border-b-gray-300 border-l-4 border-l-green-300 px-2 mb-1`}>
                            <h1 className={`text-lg font-medium`}>School Wifi Goes Off</h1>
                            <p className={`font-light text-lg`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa distinctio eaque eli?</p>
                            <p className={`font-medium`}>Posted on: <span className={`text-gray-400`}>13 Jul 2025</span></p>
                        </div>
                    </div>
                    <div className={`w-1/3 h-[340px] py-1 px-4 border-t-4 border-2 rounded-md border-gray-300 shadow-md border-t-lime-500`}>
                        <h1 className={`text-lg font-bold text-blue-950`}>ONLINE USERS</h1>
                        <h1 className={`font-medium text-gray-400`}>(LAST 5 MINUTES)</h1>
                        <div className={`w-full h-0.5 bg-gray-400 mb-2`}></div>
                        <figure className={`w-full flex space-x-2 mb-1`}>
                            <img src="/images/img_2.jpeg" alt="profile_image"  className={`w-[60px] h-[60px] rounded-full`}/>
                            <figcaption>
                                <h1 className={`text-lg font-medium`}>Jane Smith</h1>
                                <p className={`font-light`}>Online for : <span className={`text-gray-400`}>7 mins</span></p>
                            </figcaption>
                        </figure>
                        <figure className={`w-full flex space-x-2 mb-1`}>
                            <img src="/images/img_3.jpeg" alt="profile_image"  className={`w-[60px] h-[60px] rounded-full`}/>
                            <figcaption>
                                <h1 className={`text-lg font-medium`}>Ama Aidoo</h1>
                                <p className={`font-light`}>Online for : <span className={`text-gray-400`}>13 mins</span></p>
                            </figcaption>
                        </figure>
                        <figure className={`w-full flex space-x-2 mb-1`}>
                            <img src="/images/img_4.jpeg" alt="profile_image"  className={`w-[60px] h-[60px] rounded-full`}/>
                            <figcaption>
                                <h1 className={`text-lg font-medium`}>John Doe</h1>
                                <p className={`font-light`}>Online for : <span className={`text-gray-400`}>21 mins</span></p>
                            </figcaption>
                        </figure>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Page;
