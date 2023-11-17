"use client"
import Link from 'next/link'
import styles from './page.module.css'
import style1 from '@/app/styles/app.module.css'
import style2 from '@/app/styles/hoidanit.module.css'
import AppTable from './components/app.table'
import { useEffect } from 'react'
import useSWR from "swr";

export default function Home() {
  const fetcher = (url:string) => fetch(url)
  .then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    'http://localhost:8000/blogs',
    fetcher,{
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
    );

  // console.log(">>> res:",data)

  if(!data){
    return <div> loading.....</div>
  }
  return (
    <main >
     <div>
      <ul>
          <li className={style1['red']}>
          <Link href='facebook' className={style2.red}>
            FaceBook
            </Link></li>
        <li><Link href={'/tiktok'}>TikTok</Link></li>
        <li><Link href='/youtube'>Youtube</Link></li>
      </ul>
      <AppTable blogs={data?.sort((a:any,b:any)=>b.id-a.id)}/>
     </div>
    </main>
  )
}
