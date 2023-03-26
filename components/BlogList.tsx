import urlFor from '../lib/urlFor'
import Image from 'next/image'
import styles from '../styles/BlogList.module.css'
import {BsArrowUpRight} from 'react-icons/bs'
import ClientSideRoute from './ClientSideRoute'

type Props = {
  posts: Post[]
}

function BlogList({posts}: Props) {
  console.log(posts.length)
  return (
    <div>
      <hr className={styles.hzline} />
      <div className={styles.blogListContainer}>
        {/* Posts */}
        {posts.map((post) => (
          <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
            <div className={styles.postContainer}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.coverImg}
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  fill
                />
              </div>
              <div className={styles.postInfo}>
                <h4 className={styles.postTitle}>{post.title.toUpperCase()}</h4>
                {/* <p>{post.title}</p> */}
                {new Date(post._createdAt).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
                <div className={styles.desc}>
                  <p>{post.description}</p>
                </div>
                <div className={styles.readPost}>
                  <p>
                    Read Post <BsArrowUpRight />
                  </p>
                </div>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  )
}

export default BlogList
