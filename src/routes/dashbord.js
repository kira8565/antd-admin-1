import React, { PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './dashbord.less';
import { Row, Col, Icon, Progress, Tag } from 'antd';
import {ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, Bar, Line } from 'recharts';
import Card from '../components/common/card';
import { Button } from 'antd';
const ButtonGroup = Button.Group;
const CardHd = Card.CardHd;
const CardBd = Card.CardBd;
import { Table } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">{record.name}</a>
    </span>
  ),
}];

const data2 = [{
  key: '1',
  name: 'Brown',
  age: 32,
  address: 'New',
}, {
  key: '2',
  name: 'Green',
  age: 42,
  address: 'London',
}, {
  key: '3',
  name: 'Black',
  age: 32,
  address: 'Sidney',
}];



const Dashbord = () => {

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
  return (
    <div className={styles.normal}>

      <Row gutter={30}>
        <Col lg={6}>
          <Card >
            <CardHd title={'新增用户'}>
              <Tag color="#23c6c8">今天</Tag>
            </CardHd>
            <CardBd>
              <div className={styles.card}>
                <h1>86,400</h1>  
                <p>
                  <span>Total income</span>
                  <span>98%<Icon type="arrow-up" /></span>
                </p>
              </div>
            </CardBd>
          </Card>
        </Col>
        <Col lg={6}>
          <Card >
            <CardHd title={'新增订单'}>
              <Tag color="#1c84c6">昨天</Tag>
            </CardHd>
            <CardBd>
              <div className={styles.card}>
                <h1>2,1200</h1>  
                <p>
                  <span>Total income</span>
                  <span>98%<Icon type="arrow-up" /></span>
                </p>
              </div>
            </CardBd>
          </Card>
        </Col>
        <Col lg={6}>
          <Card >
            <CardHd title={'用户留存'}>
              <Tag color="#1ab394">季度</Tag>
            </CardHd>
            <CardBd>
              <div className={styles.card}>
                <h1>42,800</h1>  
                <p>
                  <span>Total income</span>
                  <span>98%<Icon type="arrow-up" /></span>
                </p>
              </div>
            </CardBd>
          </Card>
        </Col>
        <Col lg={6}>
          <Card >
            <CardHd title={'项目支出'}>
              <Tag color="#ed5565">今天</Tag>
            </CardHd>
            <CardBd>
              <div className={styles.card}>
                <h1>58,200</h1>  
                <p>
                  <span>Total income</span>
                  <span>98%<Icon type="arrow-up" /></span>
                </p>
              </div>
            </CardBd>
          </Card>
        </Col>
      </Row>



      <Card >
        <CardHd title={'趋势图'}>
          <ButtonGroup>
            <Button type="primary">日</Button>
            <Button>月</Button>
            <Button>季度</Button>
          </ButtonGroup>
        </CardHd>
        <CardBd>
          <Row gutter={30}>
            <Col lg={18}>
              <ResponsiveContainer height={200}>
                <ComposedChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid stroke="#f5f5f5" />
                  <Area type="monotone" dataKey="amt" fill="#5fc0c1" stroke="#5fc0c1" />
                  <Bar dataKey="pv" barSize={20} fill="#23c6c8" />
                  <Line type="monotone" dataKey="uv" stroke="#1c84c6" />
                </ComposedChart>
              </ResponsiveContainer>
            </Col>
            <Col lg={6}>
              <Progress percent={30} />
              test2
            </Col>
          </Row>
        </CardBd>
      </Card>

      <Row gutter={30}>
        <Col lg={8}>
          <Card >
            <CardHd title={'项目列表'}>
              <Icon type="close" />
            </CardHd>
            <CardBd>
              <Table columns={columns} dataSource={data2} size="middle"/>
            </CardBd>
          </Card>
        </Col>
        <Col lg={8}>
          <Card >
            <CardHd title={'日程安排'}>
              <Icon type="close" />
            </CardHd>
            <CardBd>

            </CardBd>
          </Card>
        </Col>
        <Col lg={8}>
          <Card >
            <CardHd title={'消息盒子'}>
              <Icon type="close" />
            </CardHd>
            <CardBd>
 
            </CardBd>
          </Card>
        </Col>
      </Row>

    </div>
  );
}

Dashbord.propTypes = {
};

export default connect()(Dashbord);
