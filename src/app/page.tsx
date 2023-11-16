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

  console.log(">>> res:",data)
  // useEffect(()=>{
  //   const fetchData= async()=>{
  //     const res = await fetch('http://localhost:8000/blogs')
  //     const data= await res.json()
  //     console.log(">>> res:",data)
  //   }
  //   fetchData()
  // },[]) 
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
      <AppTable/>
     </div>
    </main>
  )
}
