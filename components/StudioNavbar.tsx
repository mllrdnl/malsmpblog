import Link from 'next/link'
import {BsArrowUpLeftSquare} from 'react-icons/bs'
import styles from '../styles/StudioNavbar.module.css'

function StudioNavbar(props: any) {
  return (
    <div>
      <div className={styles.navBody}>
        <Link href="/" className={styles.navLink}>
          {' '}
          <BsArrowUpLeftSquare size={35} />
          <h4>Go To Website</h4>
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar
