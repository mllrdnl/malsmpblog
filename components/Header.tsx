import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/UserHeader.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/" className={styles.headerLink}>
          <Image
            className={styles.logoImg}
            src="/nodrinkinggold.png"
            height={60}
            width={60}
            alt="logo"
          />
          <h1 className={styles.headerHeader}>MMPB</h1>
        </Link>
      </div>
      <div className={styles.signUpDiv}>
        <Link className={styles.signUp} href="/">
          Sign Up for Updates!
        </Link>
      </div>
    </header>
  )
}

export default Header
