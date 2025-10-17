import React from 'react'
import '../../../../public/sass/home_scss/home_ai_solutions.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import logo from '@/../public/images/big_logo.png';
import contact from '@/../public/images/contact.png';
import call from '@/../public/images/call.png';
import ai from '@/../public/images/ai.png';
import line1 from '@/../public/images/line.png';
import line2 from '@/../public/images/line2.png';
import line3 from '@/../public/images/line3.png';
import Link from 'next/link';

const Home_ai_solutions = ({ id }) => {
    return (
        <section id={id} className='home_ai_solutions_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                        <div className='parent_area'>
                            <h3>Explore Our Hot <strong>AI Solutions</strong></h3>
                            <div className="content">
                                <div className="img_wrapper">
                                    <Image src={logo} alt='...' title='...' fetchPriority='low' />
                                </div>
                                <div className="logo_gradient"></div>
                                <div className="item">
                                    <div className="line">
                                        <Image src={line1} alt='...' title='...' fetchPriority='low' />
                                    </div>
                                    <div className="img_wrapper">
                                        <Image src={contact} alt='...' title='...' fetchPriority='low' />
                                    </div>
                                    <div className="item_content">
                                        <h3>AI Calling Agent</h3>
                                        <p>24/7 AI-powered calling & follow-ups to eliminate cold-call inefficiencies and triple your lead conversions</p>
                                    </div>
                                </div>
                                <div className="item item_2">
                                    <div className="line">
                                        <Image src={line2} alt='...' title='...' fetchPriority='low' />
                                    </div>
                                    <div className="img_wrapper">
                                        <Image src={call} alt='...' title='...' fetchPriority='low' />
                                    </div>
                                    <div className="item_content">
                                        <h3>Multi-Channel Customer Concierge</h3>
                                        <p>Unified communication across email, chat, and phone, reducing response times and boosting customer satisfaction</p>
                                    </div>
                                </div>
                                <div className="item item_3">
                                    <div className="line">
                                        <Image src={line3} alt='...' title='...' fetchPriority='low' />
                                    </div>
                                    <div className="img_wrapper">
                                        <Image src={ai} alt='...' title='...' fetchPriority='low' />
                                    </div>
                                    <div className="item_content">
                                        <h3>Smart AI Assistant</h3>
                                        <p>Enterprise AI that remembers your business and creates on-brand reports, proposals, and content 5x faster.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='button_area'>
                                <Link href="/solutions" className='btn-primary btn-green'>Explore Hot AI Solutions</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home_ai_solutions
