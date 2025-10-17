import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bannerImg from '../../../../public/images/ai_banner_img.png';
import Image from 'next/image';
import '../../../../public/sass/ai_scss/ai.scss'

const Ai_hero = () => {
    return (
        <section className='ai_hero_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <div className='image_area'>
                                <Image src={bannerImg} alt='...' priority />
                            </div>
                            <h4 className='animate_up'>AI-Powered Learning </h4>
                            <h2 className='animate_up' >For Every Student</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Ai_hero