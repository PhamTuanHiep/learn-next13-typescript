import { Metadata } from "next"

export const metadata: Metadata={
  title: {
    template: '%s belongs to Tuan Hiep ',
    default: 'Learn NextJs with Blogs',
  },
  }
  
 
export default function BlogsPageLayout({
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
