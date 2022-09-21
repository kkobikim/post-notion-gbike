import * as React from 'react'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {

 


  return (
    <footer className={styles.footer}>
      <embed type="text/html" src="https://rideglide.io/kr/bottom" width="100%" height="488px"></embed>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
