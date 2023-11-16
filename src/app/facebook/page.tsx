'use client'
import { useRouter } from 'next/navigation'
import { use } from 'react'
import { Button } from 'react-bootstrap';

const FaceBook =()=>{
    const router = useRouter()
    const handleBtn=()=>{
        router.push('/')
    }
    return (
        <>
        <Button variant='primary'>Hoi dan IT</Button>
        <div>Wellcom to FaceBook. Nice to meet you !</div>
        <button onClick={handleBtn}>Back Home</button>
        </>
    )
}
export default FaceBook