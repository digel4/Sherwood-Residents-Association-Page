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
  const [title, setTitle] = React.useState<string> ("");
  const [content, setContent] = React.useState<string> ("");
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
            setBlogItem(await blogService.getBlogItemById(blogItemId.toString()));
            //setTitle(blogItem?.data.title);
            //setContent(blogItem?.data.content);
            return;
        }
        setBlogItem(null);
    }
    fetchBlogItem()
      .then( () => {
        
    //     console.log(`in use effect. Title is: ${title}`)
    //     console.log(`in use effect. Content is: ${content}`)
      })
    .catch(console.error); 
    
            

  }, []);

  const  handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setContent(event.target.value);
	};

  const  handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(title);
    console.log(content);
  };

  const renderBlogItem = () => {
    if (blogItem === undefined) {
      return <div>Loading...</div>
    }
    if (blogItem === null) {
        return <div>News & event item not found</div>
    }
    // if (title === undefined && content === undefined) {
    //   console.log("inside if statement")
    //   return <div>Loading...</div>
    // }
    // console.log(`in renderBlogItem. Title is: ${title}`)
    // console.log(`in renderBlogItem. Content is: ${content}`)
    return (
        <div>
          <form>
            <div><input type="text"  value={blogItem.data.title} onChange={handleTitleChange}></input></div>
            <div><input type="text"  value={blogItem.data.content} onChange={handleContentChange}></input></div>
            <button type="submit">Submit</button>
            
            <h1>blogItem.data.title</h1>
            <p>blogItem.data..content</p>
          </form>
          
        </div>
        
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