import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/contact_scss/contact_banner.scss'
import Link from 'next/link'

const Contact_banner = ({ id, propsData, showButtons = true }) => {
    return (
        <section className='contact_banner_section' id={id}>
            <div className="contact_gradient"></div>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <h3>Experience Innovation Through Expertise</h3>
                            <p>
                                {propsData ? propsData.text : "Leveraging deep industry knowledge, technical brilliance, and customer-focused strategies to deliver real results"}
                            </p>
                            {showButtons && (
                                <div className='buttons_area'>
                                    <Link href='/solutions' className='btn-primary btn-green'>
                                        Explore Solutions
                                    </Link>
                                    <Link href='https://wa.me/923299346077' className='btn-primary btn-light'>
                                        Talk to an Expert
                                    </Link>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact_banner