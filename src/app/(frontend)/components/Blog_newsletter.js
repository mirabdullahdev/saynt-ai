'use client'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import '../../../../public/sass/blog_scss/blog_newsletter.scss'
import newsletterImg from '../../../../public/images/em.svg'
import Image from 'next/image'
import Link from 'next/link'
import Main_modal from './modal'

const Blog_newsletter = ({id}) => {
        const [show, setShow] = useState(false);
    

     const handleStartedClick = (e) => {
            e.preventDefault();
            
            setShow(true);
        }
    return (
        <>
            <section className='blog_newsletter_section' id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <h3>Your Next Adventure</h3>
                                <h3> Starts Here!</h3>
                                <p> subscribe to our newsletter</p>
                                <div className='image_area'>
                                    <Link href="#" className="link_area" onClick={handleStartedClick}></Link>
                                    <Image
                                        src={newsletterImg}
                                        alt='...'
                                        title='...'
                                        priority
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Main_modal show={show} setShow={setShow} type="newsletter" appointment={true} newsletter={true}/>
        </>
    )
}

export default Blog_newsletter