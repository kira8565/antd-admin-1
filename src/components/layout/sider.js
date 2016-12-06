import React from 'react';
import styles from './sider.less';
import logo from '../../assets/logo1.jpg';
import classnames from 'classnames';

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Sider = ({fold}) => {

  const menuProps = {
    defaultOpenKeys: ['sub'],
    theme: 'dark'
  }

  return (
    <div className={classnames(styles.collapse,{[styles.active]:fold})}>
        <div className={styles.logo}>
          <img className={styles.logo__img} src={logo}/>
          <span className={classnames(styles.logo__text, {[styles.hide]:fold})}></span>
        </div>

        <Menu
          {...menuProps}
          mode={fold?'vertical':'inline'}
        >
          <Menu.Item key="home"><Icon type="home" />{fold?'':'仪表盘'}</Menu.Item>
          <SubMenu key="sub" title={<span><Icon type="appstore-o" />{fold?'':'多层菜单'}</span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
    </div>
  );
};

Sider.propTypes = {
};

export default Sider;
