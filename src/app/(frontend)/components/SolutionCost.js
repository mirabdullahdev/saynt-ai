import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/pages/solution_cost.scss'
import Image from 'next/image'
import robotImg from '../../../../public/images/robot.png'
import Link from 'next/link'

const SolutionCost = () => {
    return (
        <>
            <section className='solution_cost_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='left_area'>
                                            <h3><span>Consistency</span> & Cost <span>Savings</span>—Win-Win</h3>
                                            <p>
                                            Sure You Can Hire an army of human agents. But can they match 24/7 availability, immediate follow-ups, and a 100% on-brand voice every single time?
                                            </p>
                                            <div className='button_area'>
                                                <Link href="#section_7" className="btn-primary btn-green">Get in touch</Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='right_area'>
                                            <div className='image_area'>
                                                <Image src={robotImg} alt='...' priority title="..." />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="contact_gradient"></div>
            </section>
        </>
    )
}

export default SolutionCost