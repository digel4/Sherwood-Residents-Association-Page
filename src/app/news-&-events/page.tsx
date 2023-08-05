import NewsItem from "./NewsItem"
import { news } from '../../dummyData/data'

export default function NewsAndEvents() {
  return (
      <section>
        <h1>This is the News and Events page</h1>
        { 
          news.map(( newsItem, i ) => <NewsItem content={newsItem.content} title={newsItem.title} date={newsItem.date} key={i}  />)
        }

      </section>

  )
}