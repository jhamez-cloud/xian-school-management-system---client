"use client";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/authContext";
import { useEffect, useState } from "react";

export const useAuth = (redirectIfNoAuth = false) => {
    const { userData,setUserData } = useAuthContext();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userData && redirectIfNoAuth) {
            router.push("/");
        }
        setLoading(false);
    }, [userData, redirectIfNoAuth, router]);

    return { userData,setUserData, };
};
