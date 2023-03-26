import urlFor from '@/lib/urlFor'
import {groq} from 'next-sanity'
import Image from 'next/image'
import {client} from '../../../../lib/sanity.client'
import styles from '../../../../styles/Post.module.css'
import {PortableText} from '@portabletext/react'
import {RichTextComponents} from '@/components/RichTextComponents'

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 60 // revalidate this page every 60 seconds

export async function generateStaticParams() {
  const query = groq`
  *[_type=='post']
  {
    slug
  }`

  const slugs: Post[] = await client.fetch(query)
  const slugRoutes = slugs.map((slug) => slug.slug.current)

  return slugRoutes.map((slug) => ({
    slug,
  }))
}

async function Post({params: {slug}}: Props) {
  const query = groq`
  *[_type=='post' && slug.current ==$slug][0]{
    ...,
    author->,
    categories[]->
  }`

  const post: Post = await client.fetch(query, {slug})

  return (
    <div>
      <article className={styles.postBody}>
        <section className={styles.section}>
          <div className={styles.postHeader}>
            <div className={styles.postHeaderImg}>
              <Image
                className={styles.postImg}
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
              />
            </div>

            <section className={styles.infoSection}>
              <div>
                <div>
                  <h1 className={styles.postTitle}>{post.title.toUpperCase()}</h1>
                  <p className={styles.date}>
                    {new Date(post._createdAt).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
              <div className={styles.postDesc}>
                <h2 className={styles.desc}>{post.description}</h2>
                <div className={styles.category}>
                  {post.categories.map((category) => (
                    <p key={category._id}>{category.title}</p>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <div className={styles.postContent}>
            <PortableText value={post.body} components={RichTextComponents} />
          </div>
        </section>
      </article>
    </div>
  )
}

export default Post
