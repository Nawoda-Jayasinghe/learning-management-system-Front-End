import { Card, Col, Row } from 'antd';
import React from 'react';
import { Button } from 'antd';
const App = () => (
  <div className="site-card-wrapper center">
    <Row gutter={20 }>
      <Col span={10}>
        <Card title="Course Title   " bordered={false}>
        Course Title        </Card>
      </Col>
      <Col span={10}>
        <Card title="Course Title   " bordered={false}>
        <Button type="primary">Primary Button</Button>
        </Card>
      </Col>
      
    </Row>
  </div>
);
export default App;