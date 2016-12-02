import React from 'react';
import styles from './sider.less';

import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Sider = ({fold, onFold}) => {



  function changeMode(v){
    onFold(v);
  }
  return (
    <aside className={fold?styles.collapse:''}>
        <Switch onChange={changeMode} />

        <Menu
          defaultOpenKeys={['sub']}
          mode={fold?'vertical' : 'inline'}
          theme="dark"
        >
          <SubMenu key="sub" title={<span><Icon type="appstore" /><span className="text">Navigation Two</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
    </aside>
  );
};

Sider.propTypes = {
};

export default Sider;
