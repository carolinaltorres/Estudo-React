import Logo from '../Logo'
import styles from './Footer.module.css'

const FooterLogo = () => {
  return (
    <div className={styles.footerLogo}>
      <Logo src="./Logo.png" alt="Logo" />
    </div>
  )
}

export default FooterLogo