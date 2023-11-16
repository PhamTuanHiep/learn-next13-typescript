import Link from 'next/link'
import styles from './page.module.css'
import style1 from '@/app/styles/app.module.css'
import style2 from '@/app/styles/hoidanit.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
     <div>
      <ul>
        <li className={style1['red']}>
          <Link href='facebook' className={style2.red}>
            FaceBook
            </Link></li>
        <li><Link href={'/tiktok'}>TikTok</Link></li>
        <li><Link href='/youtube'>Youtube</Link></li>
      </ul>
     </div>
    </main>
  )
}
