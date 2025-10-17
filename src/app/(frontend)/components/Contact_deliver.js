import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/contact_scss/contact_expertise.scss'

const Contact_deliver = ({ id }) => {
    return (
        <>
            <section className='contact_deliver_section' id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <div className='upper_area'>
                                    <h3>How We <span>Deliver</span></h3>
                                    {/* <p>
                                    Your assets are protected with state-of-the-art security protocols. With encrypted transactions, secure wallets, and stringent compliance,your peace of mind is our priority
                                    </p> */}
                                </div>
                                <div className='cards_area'>
                                    <div className='card_inner '>
                                        <div className='circle '></div>
                                        <h4>Consulting & Strategy</h4>
                                        <p>Understanding client needs</p>
                                    </div>
                                    <div className='card_inner '>
                                        <div className='circle'></div>
                                        <h4>Custom Development</h4>
                                        <p>Tailored tech solutions.</p>
                                    </div>
                                    <div className='card_inner '>
                                        <div className='circle'></div>
                                        <h4>Deployment & Integration</h4>
                                        <p>Smooth implementation</p>
                                    </div>
                                    <div className='card_inner '>
                                        <div className='circle'></div>
                                        <h4>Continuous Support</h4>
                                        <p>Ongoing service and innovation.</p>
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

export default Contact_deliver