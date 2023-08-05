import NewsItem from "./newsItem"
import {getCollection} from '../../firebase/firestore/getData'


export default async function NewsAndEvents() {
  const newsItemsArr = await getCollection("news-&-events")
  
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>News and Events page</h1>
        { 
          newsItemsArr.map(( newsItem, i ) => <NewsItem content={newsItem.data.content} title={newsItem.data.title} date={newsItem.data.date} key={i}  />)
        }

      </main>

  )
}