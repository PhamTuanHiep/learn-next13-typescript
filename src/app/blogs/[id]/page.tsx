const ViewDetailBlog=({params}:{params:{id: string}})=>{
    console.log("params:",params)
    return (
        <div>
            ViewDetailBlog with id = {params.id}
        </div>
    )
}
export default ViewDetailBlog