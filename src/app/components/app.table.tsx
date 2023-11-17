"use client"
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CreateModal from './create.modal';
import { useState } from 'react';
import UpdateModal from './update.modal';

interface IProps{
  blogs: IBlog[]
}
function AppTable(props: IProps) {
  const {blogs}=props
  const [blog, setBlog]=useState<IBlog | null>(null)
  const [showModalCreate,setShowModalCreate]=useState<boolean>(false)
  const [showModalUpdate,setShowModalUpdate]=useState<boolean>(false)

  console.log("blogs:",blogs)
  return (
    <>
    <div
    className='mb-3'
    style={{display:'flex', justifyContent:'space-between'}}
    >
      <h1>Table Blogs</h1>
      <Button
      variant='primary'
      onClick={()=>setShowModalCreate(true)}>Add new a Blog</Button>
    </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map(item=>{
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Button>View</Button>
                  <Button variant='warning' className='mx-3'
                  onClick={()=>{
                    setBlog(item)
                    setShowModalUpdate(true)
                    
                  }}>Edit</Button>
                  <Button variant='danger'>Delete</Button>
                </td>
              </tr>
            )
          })}
          
        </tbody>
      </Table>
      <CreateModal
      showModalCreate={showModalCreate}
      setShowModalCreate={setShowModalCreate} />
      <UpdateModal 
      blog={blog}
      setBlog={setBlog}
      showModalUpdate={showModalUpdate}
      setShowModalUpdate={setShowModalUpdate}
      />
    </>
  );
}

export default AppTable;