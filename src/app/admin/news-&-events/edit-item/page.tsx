'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter, useSearchParams} from "next/navigation";
import blogItem from "@/interfaces/blogItem";
import { blogService } from "@/services/blogService";
import styles from '@/app/styles/EditBlogItem.module.scss';
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css';


function Page() {
  const { user } = useAuthContext()
  const router = useRouter()
  const [blogItem, setBlogItem] = React.useState<blogItem | null> ();
  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const titleRef = React.useRef("");
  const contentRef = React.useRef("");
  const searchParams = useSearchParams()
  const blogItemId = searchParams.get('id')
  //const newsItems = await getCollection("news-&-events");

  React.useEffect(() => {
    //console.log(user)
      if (user === null) {
          router.push("/admin/login")
      }
  }, [user]);

  const fetchBlogItem = async (blogItemId: string) => {
    await blogService.getBlogItemById(blogItemId.toString())
      .then(res => {
        setBlogItem(res);
        setTitle(res?.data.title);
        setContent(res?.data.content);
      })
  }

  React.useEffect(() => {
    if(blogItemId) {
      fetchBlogItem(blogItemId);
    } else {
      setBlogItem(null);
    }
    
            

  }, []);

  const  handleContentChange = (newContent: string) => {
		contentRef.current = newContent;
	};

  const  handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		titleRef.current = event.target.value;
	};

  const handleSubmit = async () => {
    if (blogItemId) {
      await blogService.editBlogItemById(blogItemId, {title: titleRef.current, content: contentRef.current})
        .then(data => {
          console.log(data)
          router.push("/admin/news-&-events")
        });
    }
    
  };
  const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
  });
  const renderBlogItem = () => {
    if (blogItem === undefined) {
      return <div>Loading...</div>
    }
    if (blogItem === null) {
        return <div>News & event item not found</div>
    }

    return (
        <div className={styles.container}>
          <form>
            <div><input type="text" defaultValue={title} onChange={handleTitleChange}></input></div>
            <SunEditor setContents={content} onChange={handleContentChange}/>
            <button type="button" onClick={handleSubmit} >Submit</button>
          </form>
          
        </div>
        
    )
  }

  return (
      <main>
        { renderBlogItem() }
          {/* <h1>you reached blog</h1> */}
      </main>

  );
}

export default Page;