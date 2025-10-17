import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/calling_agent/calling_agent.scss'
import Image from 'next/image'
import aiHand from '../../../../public/images/ai_hand.png'


const Calling_result = () => {
    return (
        <>
            <section className='calling_result_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <div className='left_area'>
                                    <div className='content_area'>
                                        <h3 className='animate_up'>
                                            Fraction of the Cost, <span>100% of the Results</span>
                                        </h3>
                                        <p className='animate_up'>
                                            All the benefits—lightning-fast responses, flawless accuracy, seamless CRM integration—at a fraction of human labor costs. Free your team to tackle complex issues and build deeper customer loyalty
                                        </p>
                                    </div>
                                </div>
                                <div className='right_area'>
                                    <div className='image_area'>
                                        <Image
                                            src={aiHand}
                                            alt="..."
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Calling_result