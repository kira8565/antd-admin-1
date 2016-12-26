import React from 'react';
import styles from './sider.less';
import logo from '../../assets/logo2.png';
import classnames from 'classnames';

import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import {Link} from 'react-router';


const Sider = ({fold}) => {

  const menuProps = {
    defaultOpenKeys: ['sub'],
    theme: 'dark',
  }

  return (
    <div className={classnames(styles.collapse,{[styles.active]:fold})}>
      <div className={styles.logo}>
        <img className={styles.logo__img} src={logo}/>
        {fold ? '' : <span className={styles.logo__text}>Logo</span>}
      </div>

      <Menu
        {...menuProps}
        mode={fold?'vertical':'inline'}>
        <Menu.Item key="home">
          <Link to={`/dashbord`}><Icon type="home"/>{fold ? '' : '仪表盘'}</Link>
        </Menu.Item>
        <SubMenu key="sub" title={<span><Icon type="appstore-o" />{fold?'':'系统管理'}</span>}>
          <Menu.Item key="5">
            <Link to={`/roles`}>角色管理</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

Sider.propTypes = {};

export default Sider;
