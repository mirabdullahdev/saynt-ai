import React from 'react'
import logo from '../../../../public/images/logo.png'
import Image from 'next/image';
import '../../../../public/sass/home_scss/home_counter.scss'
import { Col, Container, Row } from 'react-bootstrap';
import Counter from './counter';

const Home_counter = ({id}) => {
    return (
        <section className='home_counter_section' >
            {/* <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}> */}
                        <div className='parent_area'>
                            {/* <div className='left_area'>
                                <div className='logo_area'>
                                    <Image
                                        src={logo}
                                        alt="..."
                                        title="..."
                                        priority
                                    />
                                </div>
                            </div> */}
                            <div className='right_area p-0'>
                                <Row>
                                    <Col xxl={2} xl={2} lg={2} md={3} sm={4} xs={12}>
                                        <div className='counter_area'>
                                            <Counter start={0} end={5} duration={5} />
                                            <p>Years Experience</p>
                                        </div>
                                    </Col>
                                    <Col xxl={2} xl={2} lg={2} md={3} sm={4} xs={12}>
                                        <div className='counter_area'>
                                            <Counter start={0} end={30} duration={5} />
                                            <p>Clients Aquired</p>
                                        </div>
                                    </Col>
                                    <Col xxl={2} xl={2} lg={2} md={3} sm={4} xs={12}>
                                        <div className='counter_area border-0'>
                                            <Counter start={0} end={200} duration={5} />
                                            <p>Projects Delivered</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    {/* </Col>
                </Row>
            </Container> */}
        </section>
    )
}

export default Home_counter