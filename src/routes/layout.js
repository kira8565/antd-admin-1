import React, { PropTypes } from 'react';
import { connect } from 'dva';

import styles from './layout.less';
import Sider from '../components/layout/sider';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';


const Layout = ({ location, dispatch, layout, children }) => {

const { fold } = layout;

  const siderProps = {
    fold
  }

  const headerProps= {
      onFold(fold) {
        dispatch({
          type: 'layout/fold',
          payload: {
            fold
          }
        });
      }
  }




  return (
    <div className={styles.main}>
        <Sider {...siderProps}/>
        <div className={styles.container}>
          <Header {...headerProps}/>
          <div className={styles.box}>
            <div  className={styles.content}>
              {children}
            </div>
          </div>
          <Footer/>
        </div>
    </div>
  );
}

Layout.propTypes = {
};


// 先拿到layout然后返回一个{layout: layout}
// 估计内部会调用Objet.assign({From_Router},{layout})
// 合并从router传过来的对象，然后传给const Layout = () => {}
const mapStateToProps = ({ layout }) => ({ layout });

export default connect(mapStateToProps)(Layout);


