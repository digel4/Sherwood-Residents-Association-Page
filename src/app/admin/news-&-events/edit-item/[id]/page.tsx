'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { getCollection } from "@/firebase/firestore/getData";

function Page({ params }: { params: { id: string } }) {
  const { user } = useAuthContext()
  const router = useRouter()
  //const newsItems = await getCollection("news-&-events");

  React.useEffect(() => {
      if (user === null) {
          router.push("/admin/login")
      }
  }, [user])

  return (
      <main>
          <h1>you reached blog</h1>
      </main>

  );
}

export default Page;