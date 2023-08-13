'use client'
import React from "react";
import NewsItem from "./newsItem"
import {getCollection} from '../../firebase/firestore/getData';
import newsItem from "@/interfaces/newsItem";


export default function NewsAndEvents() {
  const [newsItems, setNewsItems] = React.useState<newsItem[]>([])
  //const newsItemsArr = await getCollection("news-&-events")

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
      newsItems.map(( newsItem, i ) => <NewsItem content={newsItem.data.content} title={newsItem.data.title} date={newsItem.data.date} key={i}  />)
    )
    
  }
  
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>News and Events page</h1>
        {renderNewsItems()}

      </main>

  )
}