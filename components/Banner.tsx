import styles from '../styles/Banner.module.css'

function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.banner}>
        {/* <h1>Mal&apos;s Moderate Problem</h1> */}
        <h1>MAL&apos;S MODERATE PROBLEM BLOG</h1>
        <h2>Welcome to my blog about navigating the sober life!</h2>
        <h4>SOBRIETY | MENTAL HEALTH | HABITS | WELLBEING</h4>
      </div>
    </div>
  )
}

export default Banner
