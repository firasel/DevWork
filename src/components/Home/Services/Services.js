import React from 'react';
import { Button, Col, Image, Row, Typography } from 'antd';
import service_1 from '../../../images/Service-1.png'
import service_2 from '../../../images/Service-2.png'
import service_3 from '../../../images/Service-3.png'
import "./Services.scss"


const Services = () => {
    const { Title, Text } = Typography;
    return (
        <div>
            <Row justify="space-around">
                <Col span={6} offset={3}>
                    <Title level={2}>Our Services</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi commodi a!</p>
                </Col>
                <Col span={6} offset={3}>
                    <Button type="primary" ghost shape="round" size="large">
                        Learn More
                    </Button>
                </Col>
            </Row>
            <Row className='services-row'>
                <Col lg={{span:4, offset:5}}  md={{span:4, offset:5}} className='services-items' xs={{ span: 24, offset: 1 }}>
                    <Image
                        width={120}
                        height={110}
                        src={service_1}
                       
                    />
                    <Title level={3}>Shared Hosting</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi commodi a!</p>
                    <Button type="primary" shape="circle" size="large" > &#62; </Button>
                </Col>
                <Col lg={{span:4, offset:1}}  md={{span:4, offset:1}} className='services-items' xs={{ span: 24, offset: 1 }}>
                <Image
                        width={120}
                        height={110}
                        src={service_2}
                       
                    />
                    <Title level={3}>VPS Hosting</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi commodi a!</p>
                    <Button type="primary" shape="circle" size="large" > &#62; </Button>
                </Col>
                <Col lg={{span:4, offset:1}} md={{span:4, offset:1}} className='services-items' xs={{ span: 24, offset: 1 }}>
                <Image
                        width={120}
                        height={110}
                        src={service_3}
                       
                    />
                    <Title level={3}>Reseller Hosting</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi commodi a!</p>
                    <Button type="primary" shape="circle" size="large" > &#62; </Button>
                </Col>
            </Row>
            <Row className='services-row'>
                <Col lg={{span:4, offset:5}}  md={{span:4, offset:5}} className='services-items' xs={{ span: 24, offset: 1 }}>
                    <Image
                        width={120}
                        height={110}
                        src={service_1}
                       
                    />
                    <Title level={3}>Shared Hosting</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi commodi a!</p>
                    <Button type="primary" shape="circle" size="large" > &#62; </Button>
                </Col>
                <Col lg={{span:4, offset:1}}  md={{span:4, offset:1}} className='services-items' xs={{ span: 24, offset: 1 }}>
                <Image
                        width={120}
                        height={110}
                        src={service_2}
                       
                    />
                    <Title level={3}>VPS Hosting</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi commodi a!</p>
                    <Button type="primary" shape="circle" size="large" > &#62; </Button>
                </Col>
                <Col lg={{span:4, offset:1}} md={{span:4, offset:1}} className='services-items' xs={{ span: 24, offset: 1 }}>
                <Image
                        width={120}
                        height={110}
                        src={service_3}
                       
                    />
                    <Title level={3}>Reseller Hosting</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi commodi a!</p>
                    <Button type="primary" shape="circle" size="large" > &#62; </Button>
                </Col>
            </Row>
        </div>
    );
};

export default Services;