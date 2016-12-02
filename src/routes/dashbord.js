import React, { PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './dashbord.less';

function Dashbord() {
  return (
    <div className={styles.normal}>
    dash
    </div>
  );
}

Dashbord.propTypes = {
};

export default connect()(Dashbord);
