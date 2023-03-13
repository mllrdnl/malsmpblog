import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/UserHeader.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/">
          <Image
            className={styles.logoImg}
            src="/neonrose.jpeg"
            height={50}
            width={50}
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <Link href="/">Sign Up for Updates!</Link>
      </div>
    </header>
  )
}

export default Header
