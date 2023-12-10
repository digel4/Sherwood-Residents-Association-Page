import Link from 'next/link';
import gridStyles from '@/app/styles/Main.module.scss';
import styles from '@/app/styles/Footer.module.scss';

export default function Footer() {
  return (
      <section className={`${gridStyles.oneCol} ${gridStyles.container} ${styles.footer}`}>
        <h1>This is the Footer</h1>
        <Link href="/admin">Admin</Link>

      </section>
  )
}