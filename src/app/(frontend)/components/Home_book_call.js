'use client'
import React, { useState } from 'react'
import '../../../../public/sass/home_scss/home_hero_section.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Main_modal from './modal';

const Home_book_call = ({ id }) => {

    const [show, setShow] = useState(false);

    function handleshow() {
        setShow(true)
    }

    return (
        <>
            <section className='home_service_banner_section  book_call_section' id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                            <div className='parent_area'>
                                <button className='btn-primary btn-black' onClick={handleshow}>Book a Call</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Main_modal show={show} setShow={setShow} type="bookCall" appointment={null} />
        </>
    )
}

export default Home_book_call