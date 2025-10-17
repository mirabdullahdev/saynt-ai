import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bannerImg from '../../../../public/images/ai_banner_img2.png'
import '../../../../public/sass/ai_scss/ai.scss'


const Ai_chat_banner = () => {
    return (
        <section className='ai_chat_banner_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <div className='image_area animate_up'>
                                <Image src={bannerImg} alt='...' title='...' priority />
                            </div>
                            <h3 className='animate_up'>Many students lack conceptual understanding due to a system focused solely on exam preparation</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Ai_chat_banner