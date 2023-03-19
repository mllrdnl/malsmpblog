import styles from '../styles/Banner.module.css'

function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.banner}>
        <h1>Mal&apos;s Moderate Problem</h1>
        <h2>Welcome to my blog about navigating the sober life!</h2>
      </div>
      <p>Sobriety | Mental Health | Habits | Wellbeing</p>
    </div>
  )
}

export default Banner
