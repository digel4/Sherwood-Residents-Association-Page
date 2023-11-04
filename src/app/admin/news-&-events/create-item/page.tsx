'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter, useSearchParams} from "next/navigation";
import { blogService } from "@/services/blogService";
import styles from '@/app/styles/EditBlogItem.module.scss';
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css';


function Page() {
  const { user } = useAuthContext()
  const router = useRouter()
  let titleRef = React.useRef("")
  let contentRef = React.useRef("");

  React.useEffect(() => {
    //console.log(user)
      if (user === null) {
          router.push("/admin/login")
      }
  }, [user]);

  React.useEffect(() => {
   
  }, []);

   const  handleContentChange = (newContent: string) => {
 		contentRef.current = newContent;
 	};

  const  handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
 		titleRef.current = event.target.value;
 	};

  const handleSubmit = async () => {
    await blogService.createBlogItem({title: titleRef.current, content: contentRef.current})
        .then(data => {
            console.log(data);
            router.push("/admin/news-&-events");
        })
  };
  const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
  });


  const renderBlogItem = () => {
    return (
        <div className={styles.container}>
          <form>
            <div><input type="text" onChange={handleTitleChange} ></input></div>
            <SunEditor onChange={handleContentChange}/>
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