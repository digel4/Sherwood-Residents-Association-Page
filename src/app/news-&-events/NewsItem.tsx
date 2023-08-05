export default function NewsItem({title, content, date}) {
  return (
      <section>
        <h2>{title}</h2>
        <h5>{date}</h5>
        <p>{content}</p>
        
      </section>

  )
}