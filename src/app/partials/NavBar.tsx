import Link from 'next/link';

export default function NavBar() {
  return (
      <section>
        <ul>
          <li>
            <Link href="/">Home</Link>
            <Link href="/articles-of-association">Articles of Association</Link>
            <Link href="/committee-members">Committee Members</Link>
            <Link href="/news-&-events">News & Events</Link>
            <Link href="/welcome-letter">Welcome Letter</Link>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </section>
  )
}