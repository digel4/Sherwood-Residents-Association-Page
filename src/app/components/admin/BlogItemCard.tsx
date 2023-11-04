import Link from "next/link";
import styles from '@/app/styles/BlogItemCard.module.scss';


interface BlogItemCardProps {
  title: String,
  content: String,
  date: String,
  id: string
  removeItem: Function
};

export function BlogItemCard({title, content, date, id, removeItem }: BlogItemCardProps) {

  return (
      <section className={styles.container}>
        <h2>{title}</h2>
        <h5>{date}</h5>
        <p>{content}</p>
        <div>
          <button>
            <Link 
            href={{
              pathname:`/admin/news-&-events/edit-item`,
              query: {id: `${id}`}
            }}
            >Edit</Link></button>
          <button onClick={() => removeItem()}>Delete</button>
        </div>
        
      </section>

  )
}