import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/pages/home_startup.scss'

const Home_startup = ({ id }) => {
    return (
        <section className='home_startup_section' id={id}>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <div className="wide_card">
                                <Row className='row-gap-3'>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className="left">
                                            <h3>The Right Kind of Businesses—<span><strong>Startups & Mid-Scale</strong></span> Companies</h3>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className="right">
                                            <p> We empower fast-growing startups and mid-scale businesses with smart automation and efficiency—<strong>no wasted time, no excess</strong> resources.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="wide_card  right_side">
                                <Row className='row-gap-3'>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className="right">
                                            <p>We streamline, automate, and optimize with <strong>AI-driven solutions</strong>—cutting friction, boosting productivity, and driving growth without a<strong> Fortune 500</strong> budget.</p>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className="left">
                                            <h3>Workflow Woes <span><strong>Begone</strong></span></h3>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home_startup
