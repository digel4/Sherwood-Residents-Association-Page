'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { getCollection } from "@/firebase/firestore/getData";
import Link from 'next/link';

async function Page() {
  const { user } = useAuthContext()
  const router = useRouter()
  const newsItems = await getCollection("news-&-events");

  React.useEffect(() => {
      if (user === null) {
          router.push("/admin/login")
      }
  }, [user])

  return (
      <main>
          <h1>Admin Panel</h1>
          <button >Edit Event</button>
          <Link href={`/admin/news-&-events/edit-item/${"kfm4w352354"}`} >blog</Link>
      </main>

  );
}

export default Page;