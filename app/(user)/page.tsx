import Image from 'next/image'
import styles from '../../styles/page.module.css'
import {previewData} from 'next/headers'
import {groq} from 'next-sanity'
import {client} from '../../lib/sanity.client'
import PreviewSuspense from '../../components/PreviewSuspense'
import BlogList from '@/components/BlogList'
import PreviewBlogList from '@/components/PreviewBlogList'

const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`

export const revalidate = 60

export default async function Home() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p>Loading Preview Data...</p>
          </div>
        }
      >
        <PreviewBlogList query={query}></PreviewBlogList>
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query)

  return (
    <div className={styles.main}>
      <BlogList posts={posts} />
      <h1>Not in Prevew Mode</h1>
    </div>
  )
}
