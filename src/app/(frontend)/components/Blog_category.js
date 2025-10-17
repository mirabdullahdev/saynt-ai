import React from 'react'
import '../../../../public/sass/blog_scss/blog_category.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import footerBg from '../../../../public/images/footer_banner_bg.png';

const Blog_category = ({ id }) => {
    return (
        <>
            <section className='blog_category_section' id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <h3>BLOG CATEGORIES</h3>
                                <Row>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12}>
                                        <div className='inner_area inner1'>
                                            <h3>AI TRENDS & TECH</h3>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12}>
                                        <div className='middle_area'>
                                            <div className='top_area'>
                                                <h4>Product Updates</h4>
                                            </div>
                                            <div className='bottom_area'>
                                                <div className='title'>
                                                    LOGISTICS <span>5 mins read - recent post</span>
                                                </div>
                                                <div className='heading'>How AI Is Revolutionizing the Logistics Industry</div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <div className='footer_area'>
                                                    <div className='left'>
                                                        <div className='image_area'>
                                                            <Image
                                                                src={footerBg}
                                                                alt='...'
                                                                title='...'
                                                                priority
                                                            />
                                                        </div>
                                                        <div className='name'>Muhammad Aqil</div>
                                                    </div>
                                                    <div className='right'>
                                                        <p>2 days ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12}>
                                        <div className='inner_area inner3'>
                                            <h3>Industry  Insights</h3>
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

export default Blog_category