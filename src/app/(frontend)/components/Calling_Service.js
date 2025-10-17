import React from 'react'
import agentLogo1 from '../../../../public/images/agent_logo1.png'
import agentLogo2 from '../../../../public/images/agent_logo2.png'
import agentLogo3 from '../../../../public/images/agent_logo3.png'
import agentLogo4 from '../../../../public/images/agent_logo4.png'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'


const Calling_Service = () => {
    return (
        <section className='calling_service_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <h3>The <span className='bg'>Challenge</span> with <span>Traditional</span> Sales & <span>Customer</span> Service</h3>
                            <div className='inner_area'>
                                <div className="gradient"></div>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='left_area'>
                                            <h4 className='animate_up'>Overwhelmed <span>Teams</span></h4>
                                            <p className='animate_up'>Endless calls, long hold times, frustrated customers</p>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='right_area'>
                                            <div className='logo_area animate_up'>
                                                <Image src={agentLogo1} alt="..." priority>
                                                </Image>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='inner_area even'>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='left_area'>
                                            <h4 className='animate_up'>Missed  <span> Opportunities</span></h4>
                                            <p className='animate_up'>Dropped calls, forgotten details, inconsistent resolutions</p>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='right_area'>
                                            <div className='logo_area animate_up'>
                                                <Image src={agentLogo2} alt="..." priority>
                                                </Image>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='inner_area'>
                                <div className="contact_gradient"></div>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='left_area'>
                                            <h4 className='animate_up'>High  <span>Operational Costs</span></h4>
                                            <p className='animate_up'>Staffing 24/7 support teams burns budgets</p>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='right_area'>
                                            <div className='logo_area animate_up'>
                                                <Image src={agentLogo3} alt="..." priority>
                                                </Image>
                                            </div>
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

export default Calling_Service