import urlFor from '../lib/urlFor'
import Image from 'next/image'
import styles from '../styles/BlogList.module.css'

type Props = {
  posts: Post[]
}

function BlogList({posts}: Props) {
  console.log(posts.length)
  return (
    <div>
      <hr className={styles.hzline} />
      <div>
        {/* Posts */}
        {posts.map((post) => (
          <div key={post._id}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.coverImg}
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogList
