'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from 'next/link';

function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user === null) {
            router.push("/admin/login")
        }
    }, [user])

    return (
        <main>
            <h1>Admin Panel</h1>

            <div>
                <Link href="/admin/news-&-events">News & Events</Link>
            </div>
        </main>

    );
}

export default Page;
