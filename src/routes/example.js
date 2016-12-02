import React, { PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './Example.css';

function Example() {
  return (
    <div className={styles.normal}>
    </div>
  );
}

Example.propTypes = {
};

export default connect()(Example);
