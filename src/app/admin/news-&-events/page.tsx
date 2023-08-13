'use client'
import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { getCollection } from "@/firebase/firestore/getData";
import Link from 'next/link';
import newsItem from "@/interfaces/newsItem";


function Page() {
  const { user } = useAuthContext()
  const router = useRouter()
  const [newsItems, setNewsItems] = React.useState<newsItem[]>([])

  React.useEffect(() => {

    console.log("inside first use effect")

      if (user === null) {
          router.push("/admin/login")
      }
  }, [user])

  React.useEffect(() => {
    const fetchNewsItems = async () => {
        const data = await getCollection("news-&-events");

        setNewsItems(data)
      }
      fetchNewsItems()
        .catch(console.error);    
  }, [])

  const renderNewsItems = () => {
    if (newsItems.length === 0) {
      return <div>Loading...</div>
    }
    return (
      newsItems.map( (item) => {
        return (
            <Link href={`/admin/news-&-events/edit-item/${item.id}`} >{item.data.title}</Link>
        )
      } )
    )
  }




  return (
      <main>
          <h1>Admin Panel</h1>
          <button >Edit Events</button>
          { renderNewsItems()}
            

    
          
      </main>

  );
}

export default Page;