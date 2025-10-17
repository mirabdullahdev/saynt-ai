import React from 'react'
import '../../../../public/sass/ai_scss/ai.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import shape1 from '../../../../public/images/shape1.png'
import shape2 from '../../../../public/images/shape2.png'
import shape3 from '../../../../public/images/shape3.png'

const Ai_shapes = () => {
    return (
        <>
            <section className='ai_shape_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='left_area'>
                                            <h3 className='animate_up'>How AI-driven learning enhances retention and understanding</h3>
                                            <p className='animate_up'>
                                                AI-powered education platforms like Aicademy transform learning by adapting to each student’s needs, reinforcing concepts through interactive methods, and providing real-time feedback. Here’s how AI enhances retention and understanding
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='right_area'>
                                            <div className='image_area animate_up'>
                                                <Image src={shape1} alt="..." title="..." priority />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='ai_shape_section even_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='right_area'>
                                            <div className='image_area animate_up'>
                                                <Image src={shape2} alt="..." title="..." priority />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='left_area'>
                                            <h3 className='animate_up'>How Aicademy supports students in self-paced, stress-free learning.</h3>
                                            <p className='animate_up'>
                                            Aicademy provides a flexible, pressure-free learning experience, allowing students to progress at their own pace. With AI-powered planners, adaptive quizzes, and real-time feedback, students can strengthen concepts without the stress of rigid deadlines. This personalized approach makes learning more effective, engaging, and enjoyable                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> 
            <section className='ai_shape_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='left_area'>
                                            <h3 className='animate_up'>How it helps bridge the gap between affordability and quality education</h3>
                                            <p className='animate_up'>
                                            Aicademy offers personalized, high-quality education at an affordable price by using AI to replace costly tutoring. With tailored learning paths and interactive tools, students receive expert support without financial strain, making quality education accessible to everyone.                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='right_area'>
                                            <div className='image_area animate_up'>
                                                <Image src={shape3} alt="..." title="..." priority />
                                            </div>
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

export default Ai_shapes