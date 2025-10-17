import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/pages/solution_cost.scss'

const SolutionTalkSection = () => {
    return (
        <>
            <section className='solition_talk_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <Row className='align-items-center'>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='left_area'>
                                            <h3>Lets <span>Talk</span></h3>
                                            <h4>See It in <strong>Action </strong>
                                                No Jargon, <span>Just Results</span></h4>
                                            <div className='button_area'>
                                                <Link href="/" className='btn-primary btn-black'>BOOK A CALL</Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='right_area'>
                                            <p>
                                                Curious how these solutions will fit your organization like a glove? We’re happy to show you around. We promise not to bore you with endless tech jargon or complicated setups. Instead, we’ll demo the goods, highlight how each solution can streamline your workflows, and help you unleash your team’s true productivity.

                                            </p>
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

export default SolutionTalkSection