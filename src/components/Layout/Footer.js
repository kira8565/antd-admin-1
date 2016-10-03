import React from 'react'
import styles from './Footer.less'

const Footer = (props) => {
  return (
    <div className={styles.container}>
      Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
    </div>
  );
};

Footer.propTypes = {
};

export default Footer;
