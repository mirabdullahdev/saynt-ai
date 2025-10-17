import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import '../../../../public/sass/pages/solution_about_us.scss';
import Link from 'next/link';

const Solution_about_us = ({id}) => {
    return (
        <>
            <section className='solution_about_section' id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                            <div className='parent_area'>
                                <Row className='align-items-center'>
                                    <Col xxl={8} xl={8} lg={7} md={6} sm={6} xm={12}>
                                        <div className='left_area'>
                                            <h3>Specialized <span className='blue'>Solutions</span> <span className='green'>Tailored</span> to your unique needs</h3>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={5} md={6} sm={6} xm={12}>
                                        <div className='right_area'>
                                            <h3>About Us</h3>
                                            <p>
                                                We empower SMEs with the essential tools and transformations they need
                                                to stay at the forefront of the current market and solutions that will 
                                                make your business thrive in the current landscape (prone to additions)
                                            </p>
                                            <Link href="/about_us" className='btn-primary btn-light'>Get To Know Us</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> 
        </>
    )
}

export default Solution_about_us