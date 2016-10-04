import React from 'react'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu
import styles from './Sidebar.less'
import { Link } from 'dva/router'

const Sidebar = ({ active }) => {
  return (
    <div>
        <div className={styles.logo}>
          <img src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
          <span>beacon</span>
        </div>
        <Menu mode="inline" theme="dark" selectedKeys={active} defaultOpenKeys={['sub1']}>
          <SubMenu key="sub1" title={<span><Icon type="desktop" />基础功能</span>}>
            <Menu.Item key="/authors"><Link to="/authors">作者管理</Link></Menu.Item>
            <Menu.Item key="/works"><Link to="/works">作品管理</Link></Menu.Item>
            <Menu.Item key="/beacons"><Link to="/beacons">beacon管理</Link></Menu.Item>
          </SubMenu>
        </Menu>
    </div>
  );
};

Sidebar.propTypes = {
};

export default Sidebar;
