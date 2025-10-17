import Image from 'next/image'
import React from 'react'
import meetImg from '../../../../public/images/meet_txt.png'
import { Col, Container, Row } from 'react-bootstrap'

const Calling_meet = () => {
    return (
        <section className='calling_meet_section'>
            <div className="gradient"></div>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <div className='image_area'>
                                <Image
                                    src={meetImg}
                                    alt='...'
                                    priority
                                />
                                <h2 className='animate_up' >The <span>AI Calling</span> Agent</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Calling_meet