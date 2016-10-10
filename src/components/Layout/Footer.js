import React from 'react'
import styles from './Footer.less'

const Footer = (props) => {
  return (
    <div className={styles.container}>
      Emerge Demo 版权所有 © 2015 由北京那个网络技术部支持
    </div>
  );
};

Footer.propTypes = {
};

export default Footer;
