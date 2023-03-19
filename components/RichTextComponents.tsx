import Image from 'next/image'
import Link from 'next/link'
import urlFor from '../lib/urlFor'
import styles from '../styles/RichTextComponents.module.css'

export const RichTextComponents = {
  types: {
    image: ({value}: any) => {
      return (
        <div className={styles.imgContainer}>
          <Image className={styles.image} src={urlFor(value).url()} alt="Blog Post Image" fill />
        </div>
      )
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({children}: any) => <h1 className={styles.h1s}>{children}</h1>,
    h2: ({children}: any) => <h2 className={styles.h2s}>{children}</h2>,
    h3: ({children}: any) => <h3 className={styles.h3s}>{children}</h3>,
    h4: ({children}: any) => <h4 className={styles.h4s}>{children}</h4>,
    blockquote: ({children}: any) => (
      <blockquote className={styles.blockquotes}>{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({children}: any) => <h2 className={styles.h2s}>{children}</h2>,
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({children}: any) => <ul className={styles.uls}>{children}</ul>,
    number: ({children}: any) => <ol className={styles.numbered}>{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({children}: any) => <ol className={styles.checkmarks}>{children}</ol>,
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({children}: any) => <em className={styles.ems}>{children}</em>,

    // Ex. 2: rendering a custom `link` annotation
    link: ({value, children}: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <Link href={value.href} rel={rel} className={styles.links}>
          {children}
        </Link>
      )
    },
  },
}
