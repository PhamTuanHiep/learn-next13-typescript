"use client"
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CreateModal from './create.modal';
import { useState } from 'react';

interface IProps{
  blogs: IBlog[]
}
function AppTable(props: IProps) {
  const {blogs}=props
  const [showModalCreate,setShowModalCreate]=useState<boolean>(false)
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
          {blogs?.map(blog=>{
            return (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>
                  <Button>View</Button>
                  <Button variant='warning' className='mx-3'>Edit</Button>
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
    </>
  );
}

export default AppTable;