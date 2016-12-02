import React from 'react';
import styles from './sider.less';

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Sider = ({fold}) => {

  const menuProps = {
    defaultOpenKeys: ['sub'],
    theme: 'dark'
  }

  return (
    <aside className={styles.aside}>
        <div className={styles.logo}>
          <img src={'https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg'}/>
          <span>text</span>
        </div>
        <Menu
          {...menuProps}
          mode={fold?'inline' : 'vertical'}
        >
          <Menu.Item key="home"><Icon type="home" />仪表盘</Menu.Item>
          <SubMenu key="sub" title={<span><Icon type="appstore" /><span className="text">Navigation Two</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <Menu.Item key="laptop"><Icon type="laptop" />laptop</Menu.Item>
          <Menu.Item key="notification"><Icon type="notification" />notification</Menu.Item>
          <Menu.Item key="folder"><Icon type="folder" />folder</Menu.Item>
          <Menu.Item key="user"><Icon type="user" />user</Menu.Item>
        </Menu>
    </aside>
  );
};

Sider.propTypes = {
};

export default Sider;
