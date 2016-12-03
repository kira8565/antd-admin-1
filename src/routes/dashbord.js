import React, { PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './dashbord.less';
import { Row, Col, Icon, Progress } from 'antd';
import {ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, Bar, Line } from 'recharts';


const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__hd}>
        <h5>Income</h5>
        <span>Monthly</span>
      </div>
      <div className={styles.card__bd}>
        <h1>40 886,200</h1>
        <p>
          <span>Total income</span>
          <span>98%<Icon type="arrow-up" /></span>
        </p>
      </div>
    </div>
  )
}




const Dashbord = () => {

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
  return (
    <div className={styles.normal}>
      <Row gutter={30}>
        <Col lg={6}>
          <Card/>
        </Col>
        <Col lg={6}>
          <Card/>
        </Col>
        <Col lg={6}>
          <Card/>
        </Col>
        <Col lg={6}>
          <Card/>
        </Col>
      </Row>



      <Row>


         <div className={styles.test}>
            <div className={styles.test__hd}>
            
            </div>
            <div className={styles.test__bd}>
            
              <Col lg={20}>
                  <ComposedChart width={730} height={250} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="amt" fill="#5fc0c1" stroke="#5fc0c1" />
                    <Bar dataKey="pv" barSize={20} fill="#23c6c8" />
                    <Line type="monotone" dataKey="uv" stroke="#1c84c6" />
                  </ComposedChart>
              </Col>

              <Col lg={4}>
                <Progress percent={30} />
                <Progress percent={50} status="active" />
                <Progress percent={70} status="exception" />
                <Progress percent={100} />
                <Progress percent={50} showInfo={false} />
              </Col>

            </div>


          </div>







      </Row>


    </div>
  );
}

Dashbord.propTypes = {
};

export default connect()(Dashbord);
