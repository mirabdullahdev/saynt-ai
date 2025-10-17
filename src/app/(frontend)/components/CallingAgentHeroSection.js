import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/calling_agent/calling_agent.scss'
import logo from '../../../../public/images/big_white_logo.png'
import Image from 'next/image'

const CallingAgentHeroSection = () => {
    return (
        <section className='calling_agent_hero_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <div className='logo_area'>
                                <Image 
                                    src={logo}
                                    alt="..."
                                    priority
                                />
                            </div>
                            <div className='content_area'>
                                <h2>THE <span>AI Calling</span> Agent</h2>
                                <h6><span>Optimize Customer Interactions:</span> AI Automating Appointments, Bookings, and Instant Information Delivery                                 </h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CallingAgentHeroSection