import React from 'react'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu
import styles from './Sidebar.less'
import { Link } from 'dva/router'

const Sidebar = (props) => {
  return (
    <div>
        <div className={styles.logo}></div>
        <Menu mode="inline" theme="dark"
          defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
          <SubMenu key="sub1" title={<span><Icon type="desktop" />基础功能</span>}>
            <Menu.Item key="1"><Link to="/authors">作者管理</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/works">作品管理</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/beacons">beacon管理</Link></Menu.Item>
          </SubMenu>
        </Menu>
    </div>
  );
};

Sidebar.propTypes = {
};

export default Sidebar;
