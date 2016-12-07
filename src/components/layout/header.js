import React from 'react';
import styles from './header.less';
import { Icon, Badge } from 'antd';
import classnames from 'classnames';

const Header = ({fold, onFold}) => {

  function changeMode(){
    onFold(!fold);
  }

  return (
    <header className={styles.header}>
      <div className={styles.nav__start}>
        <div className={styles.nav__collapse}>
          <span className={styles.menu} onClick={changeMode}><span></span></span>
        </div>
      </div>
      <ul className={styles.nav__end}>
        <li><Icon type="user" /></li>
        <li><Icon type="search" /></li>
        <li>  
          <Badge dot>
            <Icon type="message" />
          </Badge>
        </li>
  
  
  
        <li><Icon type="setting" /></li>
        <li><Icon type="logout" /></li>
      </ul>
      
      
    </header>
  );
};

Header.propTypes = {
};

export default Header;
