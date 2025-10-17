'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/ai_scss/ai.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import logo1 from '../../../../public/images/gradient_logo1.png'
import logo2 from '../../../../public/images/gradient_logo2.png'
import logo3 from '../../../../public/images/gradient_logo3.png'
gsap.registerPlugin(ScrollTrigger);


const Ai_why_matter = () => {

    let cardData = [
        {
            image: logo1,
            heading: 'Personalized Learning',
            text: ' AI adapts to each student’s pace and understanding.',
        },
        {
            image: logo2,
            heading: 'Accessible Education',
            text: 'Designed to make quality learning available to all, regardless of financial background',
        },
        {
            image: logo3,
            heading: 'Holistic Growth',
            text: 'Moves beyond exams, fostering problem-solving and critical thinking',
        },
    ]

    useGSAP(() => {
        gsap.to(".ai_why_matter_section .middle_area h2", {
            transform: "translateX(-50%)",
            scrollTrigger: {
                trigger: '.ai_why_matter_section',
                start: "center center",
                end: "top -300%",
                scrub: 2,
                pin: true,
            }
        })


    })
    return (
        <section className='ai_why_matter_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <div className='upper_area'>
                                <div className="academy_gradient"></div>
                                <h3 className='animate_up'>Aicademy introduces a new approach</h3>
                                <p className='animate_up'>
                                    By leveraging AI, it creates a learning environment that adapts to individual student needs, promoting conceptual understanding and independent study.
                                </p>
                            </div>
                            <div className='middle_area'>
                                <h2>WHY IT MATTERS</h2>
                            </div>
                            <div className='lower_area'>
                                <div className="academy_gradient"></div>
                                <Row>
                                    {
                                        cardData?.length > 0 && cardData.map((item, index) => {
                                            return <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12} key={index} >
                                                <div className='card_inner animate_up'>
                                                    <div className='image_area'>
                                                        <Image src={item.image} alt='...' title="..." priority />
                                                    </div>
                                                    <h6>{item.heading}</h6>
                                                    <p>{item.text}</p>
                                                </div>
                                            </Col>
                                        })
                                    }
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Ai_why_matter