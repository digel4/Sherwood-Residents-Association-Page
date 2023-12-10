'use client'
import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { blogService } from "@/services/blogService";
 
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

import Link from 'next/link';
import blogItem from "@/interfaces/blogItem";
import { BlogItemCard } from "@/app/components/admin/BlogItemCard";


function Page() {
  const { user } = useAuthContext()
  const router = useRouter()
  const [blogItems, setBlogItems] = React.useState<blogItem[]>([])

  React.useEffect(() => {

    console.log("inside first use effect")

      if (user === null) {
          router.push("/admin/login")
      }
  }, [user])

  const fetchnewsItems = async () => {
    await blogService.getAllBlogItems()
      .then(res => {
        setBlogItems(res)
      })
      .catch(console.error);  
  }
  
    

  React.useEffect(() => {
    fetchnewsItems()
  }, [])

  const removeItem = async (id: string) => {
    console.log(id)
    await blogService.removeBlogItemById(id)
      .then(data => {
        fetchnewsItems()
        console.log(data)
      })
  }

  const renderBlogItems = () => {
    if (blogItems.length === 0) {
      return <div>Loading...</div>
    }
    return (
      blogItems.map( (item) => {
        return (
            <BlogItemCard content={item.data.content} title={item.data.title} date={Date.parse(item.data.date).toString()} removeItem={() => removeItem(item.id)} id={item.id} key={item.id}/>
        )
      } )
    )
  }




  return (
      <main>
          <h1>Admin Panel</h1>
          <button ><Link href="/admin/news-&-events/create-item">Create Event</Link></button>
          <button >Edit Events</button>
          { renderBlogItems() }          
      </main>

  );
}

export default Page;