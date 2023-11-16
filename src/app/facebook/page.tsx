'use client'
import { useRouter } from 'next/navigation'
import { use } from 'react'
const FaceBook =()=>{
    const router = useRouter()
    const handleBtn=()=>{
        router.push('/')
    }
    return (
        <>
        <div>Wellcom to FaceBook. Nice to meet you !</div>
        <button onClick={handleBtn}>Back Home</button>
        </>
    )
}
export default FaceBook