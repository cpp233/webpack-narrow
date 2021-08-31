import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Statistic, Row, Col } from 'antd';

import { add, sub } from './redux/actions/calAction';

function Cal() {
  const dispatch = useDispatch();
  const cal = useSelector(state => {
    return state.cal.num;
  });
  const addHandler = () => {
    dispatch(add(1));
  };
  const subHandler = () => {
    dispatch(sub(1));
  };
  return (
    <div>
      <Row>
        <Col span={3} offset={10}>
          <Statistic title='Number' valueStyle={{}} value={cal}></Statistic>
        </Col>
      </Row>
      <Row>
        <Col span={3} offset={8}>
          <Button type='primary' onClick={addHandler}>
            {'+1'}
          </Button>
        </Col>
        <Col span={3} offset={1}>
          <Button type='primary' onClick={subHandler}>
            {'-1'}
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Cal;
