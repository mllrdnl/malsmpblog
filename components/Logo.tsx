import React from 'react'
import Image from 'next/image'
import styles from '../styles/Logo.module.css'

function Logo(props: any) {
  const {renderDefault, title} = props

  return (
    <div className={styles.logoContainer}>
      <Image className={styles.image} height={50} width={50} src="/neonrose.jpeg" alt="logo" />

      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}

export default Logo
