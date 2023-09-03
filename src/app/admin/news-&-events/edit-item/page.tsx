'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter, useSearchParams} from "next/navigation";
import blogItem from "@/interfaces/blogItem";
import { blogService } from "@/services/blogService";



function Page() {
  const { user } = useAuthContext()
  const router = useRouter()
  const [blogItem, setBlogItem] = React.useState<blogItem | null> ();
  const searchParams = useSearchParams()
  const blogItemId = searchParams.get('id')
  //const newsItems = await getCollection("news-&-events");

  React.useEffect(() => {
    console.log(user)
      if (user === null) {
          router.push("/admin/login")
      }
  }, [user]);

  React.useEffect(() => {
    const fetchBlogItem = async () => {
        if(blogItemId) {
            setBlogItem(await blogService.getBlogItemById(blogItemId.toString()))
            return;
        }
        setBlogItem(null);
    }
    fetchBlogItem()
    .catch(console.error); 

  }, []);

  const renderBlogItem = () => {
    if (blogItem === undefined) {
      return <div>Loading...</div>
    }
    if (blogItem === null) {
        return <div>News & event item not found</div>
      }
    return (
        blogItem.data.title
        )
  }

  return (
      <main>
        { renderBlogItem() }
          <h1>you reached blog</h1>
      </main>

  );
}

export default Page;