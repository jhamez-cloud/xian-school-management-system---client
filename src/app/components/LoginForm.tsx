"use client"

import React, {FormEvent} from 'react';
import Link from "next/link";
import FormInput from "@/app/components/ui/FormInput";
import {useState} from "react";
import {useRouter} from "next/navigation";

const LoginForm = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string>('');

    const router = useRouter();

    const handleLogin = async (event:FormEvent) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        if(!email || !password) {
            setError(`Please enter email and password.`);
            return;
        }

        const formData = {
            email: email,
            password: password,
        }

        try{
            setLoading(true);

            const res = await fetch(`http://localhost:8080/api/auth/login`,{
                method: 'POST',
                headers: {"content-type": "application/json"},
                credentials: "include",
                body: JSON.stringify(formData),
            })

            let data;
            try{
                data = await res.json();
            }catch(jsonError){
                console.log(`Failed to connect to the database with error: ${jsonError}`);
                throw new Error(`Invalid response from database.`);
            }

            if(!res.ok){
                throw new Error(data.message || `Could not log user into account.`);
            }

            setSuccess(data.message || `Successfully logged in.`);
            setTimeout(() => router.push("/Dashboard"), 2000);

        }catch(err:any){
            console.log(`Failed to connect to the database.`);
            setError(err.message || `Invalid response from database.`);
        }finally {
            setLoading(false);
        }

    }

   // console.log(`email: ${email} password: ${password}`);

    return (
        <div className={`w-2/5 border-2 border-gray-300 border-t-4 border-t-green-300 rounded-md shadow-md space-y-2 px-4 pt-8 pb-4`}>
            <h1 className={`text-2xl font-semibold`}>Enter Account Credentials</h1>
            {/* Display error message if any */}
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mb-4">
                    {error}
                </div>
            )}

            {/* Display success message if any */}
            {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded relative mb-4">
                    {success}
                </div>
            )}
            <form action="" className={`w-full space-y-2`} onSubmit={handleLogin}>
                <FormInput type={`email`} name={`email`} placeholder={`Email Address`} handler={(e)=>setEmail(e.target.value)}/>
                <FormInput type={`password`} name={`password`} placeholder={`Password`} handler={(e)=>setPassword(e.target.value)}/>
                <button
                    className={`w-full p-2 text-lg cursor-pointer ${loading ? 'bg-gray-400' : 'bg-green-500'} rounded-md px-4 text-white font-semibold shadow-md`}
                    type={`submit`}
                >
                    {loading ? 'Logging In...' : 'Login'}
                </button>
            </form>
            <p className={`w-full text-right space-x-2 font-bold`}>
                <span>Dont Have An Account?</span><Link href={`/Register`} className={`underline`}>Register</Link>
            </p>
        </div>
    );
};

export default LoginForm;