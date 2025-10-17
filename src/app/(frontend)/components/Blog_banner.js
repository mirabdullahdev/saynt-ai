import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import '../../../../public/sass/blog_scss/blog_banner.scss'
import Link from 'next/link'
import linesImg from '../../../../public/images/lines.png'
import papersIcon from '../../../../public/images/papers_icon.png'
import Image from 'next/image'

const Blog_banner = ({ id }) => {
    return (
        <>
            <section className='blog_banner_section' id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <Row>
                                    <Col xxl={12} xl={8} lg={12} md={12} sm={12} xs={12}>
                                        <div className='left_area'>
                                            <div className='upper_area'>
                                                <h3>Explore Our Knowledge Hub</h3>
                                                <div className='btn_content_area'>
                                                    <i className="bi bi-arrow-down-circle-fill"></i>
                                                    <div className='txt_heading_area'>
                                                        <div className='heading'>Blogs</div>
                                                        <div className='text'>And Insights</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='middle_area'>
                                                <p>Discover valuable resources to help you harness the pow er of AI for your business</p>
                                                <div className='sign_up_area'>
                                                    <div className='lines_img'>
                                                        <Image
                                                            src={linesImg}
                                                            alt='...'
                                                            title='...'
                                                            priority
                                                        />
                                                    </div>
                                                    <div className='title'>
                                                        <i className="bi bi-dot"></i>
                                                        Signup
                                                    </div>
                                                    <div className='circles'>
                                                        <div className='circle circle1'>
                                                            <div className='circle circle2'>
                                                                <div className='circle circle3'>
                                                                    <div className='line'></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className='lower_area'>
                                                <div className='button_area'>
                                                    <Link href='/' className='btn-primary btn-black'>Explore Resources</Link>
                                                </div>
                                                <Form>
                                                    <div className='form_group'>
                                                        <Form.Control type="email" placeholder="Your Email" />
                                                        <div className='button_area'>
                                                            <Link href='/' className='btn-primary btn-green'>Subscribe</Link>
                                                        </div>
                                                    </div>
                                                </Form>
                                                <div className='line'></div>
                                                <div className='text'>
                                                    Not your usual feeds filled with trash, But content we send are content you need!
                                                </div>
                                            </div> */}
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={12} md={12} sm={12} xs={12}>
                                        <div className='right_area'>
                                            <div className='box1'>
                                                <div className='heading_icon_area'>
                                                    <h3>What’s New?</h3>
                                                    <Link href='/'>
                                                        <i className="bi bi-arrow-up-right"></i>
                                                    </Link>
                                                </div>
                                                <p>
                                                    SAYNT AI Expands Into Global Markets
                                                </p>
                                                <div className='img_area'>

                                                </div>
                                            </div>
                                            <div className='box2'>
                                                <div className='image_area'>
                                                    <Image
                                                        src={papersIcon}
                                                        alt='...'
                                                        title='...'
                                                        priority
                                                    />
                                                </div>
                                                <div className='content_area'>
                                                    <h3>Whitepapers</h3>
                                                    <p>Indepth Research On Targeted
                                                        industries </p>
                                                </div>
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

export default Blog_banner