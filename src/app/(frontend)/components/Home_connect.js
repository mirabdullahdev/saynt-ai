import React from 'react'
import '../../../../public/sass/home_scss/home_connect.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import connectBg from '../../../../public/images/screen.jpg'
import Image from 'next/image';


const Home_connect = ({id}) => {
    return (
        <section className='home_connect_section' id={id}>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                        <div className='parent_area'>
                            <Row className='align-items-center'>
                                <Col xxl={5} xl={5} lg={5} md={6} sm={6} xm={12}>
                                    <div className='left_area'>
                                        <h3>
                                            Connect. Merge. Work
                                        </h3>
                                        <div className='button_area'>
                                            <Link href="/careers" className='btn-primary btn-green'> 
                                                Get Hired
                                            </Link>
                                        </div>
                                        <p>Join the Network Where Innovation Meets Opportunity – Your Journey with Saynt Starts Here</p>
                                    </div>
                                </Col>
                                <Col xxl={7} xl={7} lg={7} md={6} sm={6} xm={12}>
                                    <div className='right_area'>
                                        <div className='image_area'>
                                            <Image 
                                                src={connectBg}
                                                alt='...'
                                                title='...'
                                                priority
                                            />
                                        </div>
                                        <h3>Connect, Collaborate, and Get Hired</h3>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home_connect