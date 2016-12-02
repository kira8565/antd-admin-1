import React, { PropTypes } from 'react';
import { connect } from 'dva';

import { Input } from 'antd';
import styles from './layout.less';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

const Layout = () => {
  return (
    <div>
        <header>header</header>
        <aside>aside<Input/></aside>
        <footer>footer</footer>
    </div>
  );
}

Layout.propTypes = {
};

export default connect()(Layout);
