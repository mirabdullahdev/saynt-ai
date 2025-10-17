import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/ai_scss/ai.scss'
import Image from 'next/image'
import bgImg from '../../../../public/images/key_feature_bg.png'
import bgImgTop from '../../../../public/images/top_img.png'
import bgImgBottom from '../../../../public/images/bottom_img.png'

const Ai_key_feature = () => {
    return (
        <section className='ai_key_feature_section animate_up'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <div className='img_area'>
                                <div className='top_img'>
                                    <Image src={bgImgTop} alt="..." title="..." priority />
                                </div>
                                <div className='bottom_img'>
                                    <Image src={bgImgBottom} alt="..." title="..." priority />
                                </div>
                                <Image src={bgImg} alt="..." title="..." priority />
                                <div className='inner_area'>
                                    <h3 className='animate_up'>KEY</h3>
                                    <h4 className='animate_up'>FEATURES</h4>
                                    <h5 >Smart Learning, Personalized for You</h5>
                                    <p>Explore AI-powered tutoring, structured study plans, and interactive tools designed to enhance your learning experience</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Ai_key_feature