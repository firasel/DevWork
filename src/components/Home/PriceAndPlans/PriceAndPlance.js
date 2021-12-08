import { Button, Col, Image, Row,Space, Typography } from 'antd';
import React from 'react';
import './PriceAndPlance.scss'
import Icon_1 from '../../../images/Icon-1.png'
import Icon_2 from '../../../images/Icon-2.png'
import Icon_3 from '../../../images/Icon-3.png'

const PriceAndPlance = () => {
    const { Title } = Typography;
    return (
        <div className='price-container' >
            <Space direction="vertical" align='center' style={{ width: "100%" }}>
                <Title level={2}>Price & Plans</Title>
                <p direction="vertical" align='center' style={{ width: "100%" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Nihil animi commodi a!Lorem <br /> ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi commodi a!</p>
            </Space>
            <Row  >
                <Col lg={{span:4, offset:5}}  md={{span:4, offset:5}} className='price-item' xs={{ span: 24, offset: 1 }}>
                    <Image
                        width={220}
                        height={220}
                        src={Icon_1}
                       
                    />
                    <Title level={3}>Shared Hosting</Title>
                    <p>s <h1 className='price-number'>34</h1>/mo </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi commodi a!</p>
                    <Button type="primary" shape="circle" size="large" > &#62; </Button>
                </Col>
                <Col lg={{span:4, offset:1}}  md={{span:4, offset:1}} className='price-item' xs={{ span: 24, offset: 1 }}>
                <Image
                        width={220}
                        height={220}
                        src={Icon_2}
                       
                    />
                    <Title level={3}>VPS Hosting</Title>
                    <p>s <h1 className='price-number'>34</h1>/mo </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi commodi a!</p>
                    <Button type="primary" shape="circle" size="large" > &#62; </Button>
                </Col>
                <Col lg={{span:4, offset:1}} md={{span:4, offset:1}} className='price-item' xs={{ span: 24, offset: 1 }}>
                <Image
                        width={220}
                        height={220}
                        src={Icon_3}
                       
                    />
                    <Title level={3}>Reseller Hosting</Title>
                    <p>s <h1 className='price-number'>34</h1>/mo </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi commodi a!</p>
                    <Button type="primary" shape="circle" size="large" > &#62; </Button>
                </Col>
            </Row>
        <div className='price-text'>
            <p><a href=""> see plan details </a>and piciln for more information</p>
            </div>
        </div>
    );
};

export default PriceAndPlance;