import React from 'react';
import './home.css';
import { Row, Col, Carousel, Card, Button, Select, Layout } from 'antd';
import { MobileOutlined, CloseCircleOutlined } from '@ant-design/icons/'
const { Option } = Select;
const { Header, Content, Footer } = Layout;
const Home = () => {
    const contentStyle = {
        height: "320px",
        width: "100%",

    };
    return (
        
            <Card className="card">
                <Row gutter={12}  >

                    <Col lg={16} md={24} sm={24}  >

                        <div className="container">
                            <img className="landing-image" src="./images/girl.jpg" alt="homePageImage" />
                            <h1 className="centered">Dark Studio</h1>
                            <Button className="centered-button" size="small" type="text" style={{ color: "orange" }}>connect</Button>

                        </div>

                    </Col>

                    <Col lg={8} md={24} sm={24}  >

                        <Carousel autoplay>
                            <div>
                                <img style={contentStyle} src="/images/plant.jpg" alt="girl" />
                            </div>
                            <div>
                                <img style={contentStyle} src="./images/butterfly.jpg" alt="butterfly" />
                            </div>
                            <div>
                                <img style={contentStyle} src="./images/batman.jpg" alt="batman" />
                            </div>
                            <div>
                                <img style={contentStyle} src="./images/balls.jpg" alt="balls" />
                            </div>
                        </Carousel>
                        <Row gutter={8} style={{ marginTop: "1rem" }}>
                            <Col span={12}>
                                <Card size="small" hoverable style={{ backgroundColor: "orange", textAlign: 'left' }} >
                                    <h4><b>total visits</b></h4>
                                    <p>251</p>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card size="small" hoverable style={{ backgroundColor: "orange", textAlign: 'left' }}>
                                    <h4><b>Last Visit</b></h4>
                                    <p>30 days back</p>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Card style={{ textAlign: "left" }}>
                                    <Row>
                                        <Col span={3}>
                                            <MobileOutlined style={{ fontSize: "40px", color: "orange" }} />
                                        </Col>
                                        <Col span={21}>
                                            <h4>Registered to device</h4>
                                            <p>9876543210</p>
                                        </Col>
                                    </Row>
                                    <Button style={{ float: "right" }} type="link"><CloseCircleOutlined />Unlink device</Button>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={23}>
                                <h4 >Are you a part of</h4><br />
                                <h3 style={{ color: 'orangered', marginTop: "-25px" }}><b>OPEN WIFI- OFFICE?</b></h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={23}>
                                <h4 style={{ float: 'left' }}>Yes, I am from</h4><br />
                                <Row gutter={6}>
                                    <Col span={12}>
                                        {/*<Button style={{width:"100%",backgroundColor:"white",color:"black"}} type="primary" ><b>Select Group</b></Button>*/}
                                        <Select defaultValue="Select Group" style={{ width: "100%" }} >
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                            <Option value="Yiminghe">yiminghe</Option>
                                        </Select>
                                    </Col>
                                    <Col span={12}>
                                        <Button style={{ width: "100%", backgroundColor: "orange" }} type="primary"><b>Register</b></Button>
                                    </Col>
                                </Row>
                                <br /><br />
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Card>
      

    )
}

export default Home
