'use client'
import React from "react";
import BlogItem from "./blogItem"
import { blogService } from "@/services/blogService";
import blogItem from "@/interfaces/blogItem";
import gridStyles from '@/app/styles/Main.module.scss';
import styles from '@/app/styles/News.module.scss';



export default function NewsAndEvents() {
  const [blogItems, setBlogItems] = React.useState<blogItem[]>([])
  //const newsItemsArr = await getCollection("news-&-events")

  React.useEffect(() => {
    const fetchBlogItems = async () => {
        setBlogItems(await blogService.getAllBlogItems())
      }
      fetchBlogItems()
        .catch(console.error);    
  }, [])


  const renderBlogItems = () => {
    if (blogItems.length === 0) {
      return <div>Loading...</div>
    }
    return (
      blogItems.map(( newsItem, i ) => <BlogItem content={newsItem.data.content} title={newsItem.data.title} date={Date.parse(newsItem.data.date).toString()} key={i}  />)
    )
    
  }
  
  return (
      <main className={`${gridStyles.oneCol} ${gridStyles.container} ${styles.events}`}>
        <h1>News and Events page</h1>
        {renderBlogItems()}

      </main>

  )
}