import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
     <div>
      <ul>
        <li><Link href='facebook'>FaceBook</Link></li>
        <li><Link href={'/tiktok'}>TikTok</Link></li>
        <li><Link href='/zalo'>Zalo</Link></li>
      </ul>
     </div>
    </main>
  )
}
