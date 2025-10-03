"use client"

import React from 'react';
import Link from "next/link";
import FormInput from "@/app/components/ui/FormInput";
import {useState} from "react";
import {useRouter} from "next/navigation";

const RegisterForm = () => {
    const router = useRouter();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    const handleRegister = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        // Validate inputs
        if (!name || !email || !password) {
            setError('All fields are required');
            return;
        }

        const formData = {
            username: name,
            email: email,
            password: password,
        }

        try {
            setLoading(true);

            const res = await fetch('http://localhost:8080/api/auth/register', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData) // Send data directly without nesting
            });

            let data;
            try {
                data = await res.json();
            } catch (jsonError) {
                console.error('Error parsing JSON response:', jsonError);
                //throw new Error('Invalid response from server. Please try again.');
            }

            if (!res.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            setSuccess(data.message || 'Registration successful!');
            // Redirect after a short delay to show success message
            setTimeout(() => {
                router.push("/Dashboard");
            }, 1500);

        } catch (err: any) {
            setError(err.message || 'Failed to create account. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={`w-2/5 border-2 border-gray-300 border-t-4 border-t-green-300 rounded-md shadow-md space-y-2 px-4 pt-8 pb-4`}>
            <h1 className={`text-2xl font-semibold`}>Create Admin Account</h1>

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

            <form onSubmit={handleRegister} className={`w-full space-y-2`}>
                <FormInput type={`text`} name={`username`} placeholder={`Username`} handler={(e)=>setName(e.target.value)}/>
                <FormInput type={`email`} name={`email`} placeholder={`Email Address`} handler={(e)=>setEmail(e.target.value)}/>
                <FormInput type={`password`} name="newPassword" placeholder={`Create Password`} handler={(e)=>setPassword(e.target.value)}/>
                <button
                    type="submit"
                    className={`w-full p-2 text-lg cursor-pointer ${loading ? 'bg-gray-400' : 'bg-green-500'} rounded-md px-4 text-white font-semibold shadow-md`}
                    disabled={loading}
                >
                    {loading ? 'Signing up...' : 'Signup'}
                </button>
            </form>
            <p className={`w-full text-right space-x-2 font-bold`}>
                <span>Already Have An Account?</span><Link href={`/`} className={`underline`}>Login</Link>
            </p>
        </div>
    );
};

export default RegisterForm;
