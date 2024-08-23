import { Metadata, ResolvingMetadata} from 'next'
 
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  //params on path
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
  console.log('params:',params)
  console.log('searchParams:',searchParams)

  // fetch data
  const product = await fetch(`http://localhost:8000/blogs/${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    // title: product.title
    title: {
          absolute: product.title,
        },
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}
 
export default function ViewDetailBlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <>
   {children}
   </>
  )
}