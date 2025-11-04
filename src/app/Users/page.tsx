"use client";

import React, {useContext, useEffect, useState} from "react";
import NavBar from "@/app/components/NavBar";
import {StateContext} from "@/context/StateContext";
import Header from "@/app/components/Header";
import StudentCard from "@/app/components/StudentCard";
import {studentsType} from "@/context/Types";

const Page = () => {
    const context = useContext(StateContext);
    if(!context) {
        throw new Error("No context provided");
    }

    const {userData} = context;
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [studentsData, setStudentsData] = useState<studentsType>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [startingIndex, setStartingIndex] = useState<number>();
    const [endingIndex, setEndingIndex] = useState<number>();

    useEffect(() => {
        setUsername(userData.user?.userName);
        setEmail(userData.user?.email);
        setStartingIndex((page - 1) * 12);
        setEndingIndex(page * 12);

        const getStudents  = async () => {
            try {
                setLoading(true);
                const res = await fetch(`http://localhost:8080/api/db/students`,{
                    method: "GET",
                    headers:{"Content-Type": "application/json"},
                })

                if(!res.ok){
                    console.error(`Failed to fetch students data`);
                }

                const data = await res.json();
                setStudentsData(data);
                console.log(`Fetched Students: `,data);
            }catch(err:any){
               console.error(`Failed to fetch students data: ${err.message}`);
            }finally{
                setLoading(false);
            }
        }

        getStudents();
    },[page])

    return (
        <div className="w-full h-full border-t-16 border-t-blue-400 flex space-x-8">
            <NavBar email={email} username={username}/>
            <section  className={`w-5/6 h-full py-4 pt-0 space-y-2 bg-white overflow-y-scroll relative`}>
                <Header/>
                <div className={`w-full flex items-center justify-between px-2 pr-1.5 mt-12`}>
                    <div className={`flex space-x-6`}>
                        <h1 className={`text-xl font-bold py-2`}>REGISTERED STUDENTS</h1>
                        <select name="" id="" className={`focus:outline-none`}>
                            <option value="">Filter By</option>
                            <option value="">Level</option>
                            <option value="">Increasing GPA</option>
                            <option value="">Decreasing GPA</option>
                            <option value="">Name A-Z</option>
                            <option value="">Name Z-A</option>
                            <option value="">Full Payment</option>
                            <option value="">Part Payment</option>
                        </select>
                    </div>
                    <button className={`w-[150px] cursor-pointer bg-green-500 text-white rounded-sm text-lg font-medium text-shadow-lg px-2 py-1`}>Add Student</button>
                </div>
                <div className={`w-full min-h-[545px] grid grid-cols-[repeat(6,15%)] gap-x-6 gap-y-4 `}>
                    {
                        studentsData.slice(startingIndex,endingIndex).map((student,index)=>(
                            <StudentCard key={index} name={student.name} index={student._id.trim()} gpa={student.GPA} image={student.image} level={student.level}/>
                        ))
                    }
                </div>
                <div className={`w-full flex justify-center space-x-6 px-2 py-2`}>
                    {
                        page === 1 && Math.ceil(studentsData.length/12) > 1 ?
                            <button onClick={()=> setPage(prev=>prev + 1)} className={`rounded-md px-2 text-lg font-medium cursor-pointer text-blue-500`} style={{boxShadow:"0 0 10px rgba(0,0,0,0.5)"}}>{`Next >>`}</button>:
                        page <  Math.ceil(studentsData.length/12)?
                            <>
                                <button onClick={()=> setPage(prev=>prev - 1)} className={`rounded-md px-2 text-lg font-medium cursor-pointer text-blue-500`} style={{boxShadow:"0 0 10px rgba(0,0,0,0.5)"}}>{`<< Prev`}</button>
                                <button onClick={()=> setPage(prev=>prev + 1)} className={`rounded-md px-2 text-lg font-medium cursor-pointer text-blue-500`} style={{boxShadow:"0 0 10px rgba(0,0,0,0.5)"}}>{`Next >>`}</button>
                            </>:
                        page === Math.ceil(studentsData.length/12) && page > 1 ?
                            <button onClick={()=> setPage(prev=>prev - 1)} className={`rounded-md px-2 text-lg font-medium cursor-pointer text-blue-500`} style={{boxShadow:"0 0 10px rgba(0,0,0,0.5)"}}>{`<< Prev`}</button>:
                            null
                    }
                </div>
            </section>
        </div>
    );
};

export default Page;
