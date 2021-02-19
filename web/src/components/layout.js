import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'
import Icon from './icon/index'
import HamburgerIcon from './icon/hamburger'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>

    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />     
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          Wszelkie prawa zastrzeżone © {new Date().getFullYear()}, Koobi Studio, Warszawa
        </div>
      </div>
    </footer>
  </>
);

export default Layout
