'use client'
import Link from 'next/link';
import gridStyles from '@/app/styles/Main.module.scss';
import styles from '@/app/styles/Nav.module.scss';


export default function NavBar() {
  return (
      <section className={`${gridStyles.oneCol} ${gridStyles.container} ${styles.navigationBar}`}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/articles-of-association">Articles of Association</Link></li>
          <li><Link href="/committee-members">Committee Members</Link></li>
          <li><Link href="/news-&-events">News & Events</Link></li>
          <li><Link href="/welcome-letter">Welcome Letter</Link></li>
          <li><Link href="/contact-us">Contact Us</Link></li>
        </ul>
      </section>
  )
}