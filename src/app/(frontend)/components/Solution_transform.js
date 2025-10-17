'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import { motion } from "motion/react"
import uiCard from '../../../../public/images/ui_card.png';
import webCard from '../../../../public/images/web_card.png';
import recShape1 from '../../../../public/images/small_rec_shape.png';
import recShape2 from '../../../../public/images/big_rec_shape.png';
import bgImg from '../../../../public/images/logistics_bg2.webp';
import finance from '../../../../public/images/finance.webp';
import retail from '../../../../public/images/retail.jpg';
import '../../../../public/sass/pages/solution_transform.scss';
import { delay } from 'motion';

const Solution_transform = ({id}) => {

    const [show, setShow] = useState(false);
    const [hover, sethover] = useState(false);
    const contentList = [
        {
            title: 'Wholesale & Retail',
            text: 'Make operations smoother and payments simpler with AI solutions designed specifically for wholesale and retail businesses',
            image: retail,
        },
        {
            title: 'Logistics',
            text: 'Streamline routes and track your fleet effortlessly with SAYNT AI, designed to make your logistics smarter and more efficient',
            image: bgImg
        },
        {
            title: 'FinTech',
            text: 'Ensure secure payments and robust risk management with SAYNT AI, paving the way for the future of finance',
            image: finance,
        },
    ]
    const variants = {
        initial_top: {
            y: -500
        },
        initial_bottom: {
            y: 500
        },
        initial_left: {
            x: -500
        },
        initial_right: {
            x: 500
        },
        visible: {
            y: 0,
            x: 0,
            transition: {
                ease: 'anticipate',
                duration: 1.5,
            }
        }
    }

    return (
        <>
            <section className='transform_solution_section' id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                            <div className='parent_area'>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} xm={12}>
                                        <motion.div className='left_area' whileInView={() => setShow(true)} whileHover={() => sethover(true)}>
                                            <motion.div
                                                className='shape_img1'
                                                initial={variants.initial_top}
                                                animate={show? variants.visible: ''}
                                                whileHover={hover? {scale: 1.03}:''}
                                            >
                                                <Image src={recShape1} alt='...' title='...' priority></Image>
                                            </motion.div>
                                            <motion.div
                                                className='shape_img2'
                                                initial={variants.initial_right}
                                                animate={show? variants.visible: ''}
                                                whileHover={hover? {scale: 1.03}:''}
                                            >
                                                <Image src={recShape2} alt='...' title='...' priority></Image>
                                            </motion.div>
                                            <motion.div
                                                className='web_img'
                                                initial={variants.initial_left}
                                                animate={show? variants.visible: ''}
                                                whileHover={hover? {scale: 1.03}:''}
                                            >
                                                <Image src={webCard} alt='...' title='...' priority></Image>
                                            </motion.div>
                                            <motion.div
                                                className='ui_img'
                                                initial={variants.initial_bottom}
                                                animate={show? variants.visible: ''}
                                                whileHover={hover? {scale: 1.03}:''}
                                            >
                                                <Image src={uiCard} alt='...' title='...' priority></Image>
                                            </motion.div>
                                            <div className='content_area'>
                                                <h3>
                                                    Transform Your Business with Real-World Solutions
                                                </h3>
                                                <p>
                                                    Explore how SAYNT AI is driving success across industries with interactive demos, case studies, and proven results
                                                </p>
                                                {/* <div className='button_area'>
                                                    <Link href="#" className='btn-primary btn-white'>Case-Studies</Link>
                                                </div> */}
                                            </div>
                                        </motion.div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} xm={12}>
                                        <div className='right_area'>
                                            {
                                                contentList && contentList.length > 0 && contentList.map((element, index) => {
                                                    return <div key={index} className='content_area'>
                                                        {
                                                            element.image && (
                                                                <div className="bg_img">
                                                                    <Image src={element.image} alt="..." title="..." priority />
                                                                </div>
                                                            )
                                                        }
                                                        <h3>{element.title}</h3>
                                                        <p>{element.text}</p>
                                                    </div>
                                                })
                                            }
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

export default Solution_transform