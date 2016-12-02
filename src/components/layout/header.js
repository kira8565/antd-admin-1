import React from 'react';
import styles from './header.less';
import { Icon, Switch } from 'antd';

const Header = ({onFold}) => {


  function changeMode(v){
    onFold(v);
  }


  return (
    <header className={styles.header}>
      <div className={styles.nav__start}>
        <Switch onChange={changeMode} />
      </div>
      <section className={styles.nav__center}>
        <div className={styles.nav__menu}>
					<ul>
						<li>项目</li>
						<li>企业</li>
						<li>我的</li>
						<li>日历</li>
						<li>通知</li>
					</ul>
        </div>
      </section>
      <ul className={styles.nav__end}>
        <li><Icon type="user" /></li>
        <li><Icon type="search" /></li>
        <li><Icon type="message" /></li>
        <li><Icon type="setting" /></li>
        <li><Icon type="logout" /></li>
      </ul>
      
      
    </header>
  );
};

Header.propTypes = {
};

export default Header;
