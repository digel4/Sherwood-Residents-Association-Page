'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user === null) {
            router.push("/admin/signin")
        }
    }, [user])

    return (
    <h1>You have reached the admin page</h1>
    );
}

export default Page;
