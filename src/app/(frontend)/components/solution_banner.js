'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { motion, useAnimation } from "framer-motion"
import banner1 from '../../../../public/images/banner1.png';
import rec5 from '../../../../public/images/rec5.svg';
import rec6 from '../../../../public/images/rec6.svg';
import rec7 from '../../../../public/images/rec7.svg';
import rec8 from '../../../../public/images/rec8.svg';
import rec9 from '../../../../public/images/rec9.svg';
import rec10 from '../../../../public/images/rec10.svg';
import rec11 from '../../../../public/images/rec11.svg';
import rec12 from '../../../../public/images/rec12.svg';
import rec13 from '../../../../public/images/rec13.svg';
import rec2 from '../../../../public/images/rec2.svg';
import rec3 from '../../../../public/images/rec3.svg';
import rec4 from '../../../../public/images/rec4.svg';
import icon5 from '../../../../public/images/icon5.png';
import icon6 from '../../../../public/images/icon6.png';
import icon7 from '../../../../public/images/icon7.png';
import icon8 from '../../../../public/images/icon8.png';
import icon9 from '../../../../public/images/icon9.png';
import icon10 from '../../../../public/images/icon10.png';
import icon11 from '../../../../public/images/icon11.png';
import icon12 from '../../../../public/images/icon12.png';
import rec1 from '../../../../public/images/rec1.svg';
import logo from '../../../../public/images/white_logo.png';
import '../../../../public/sass/pages/solution_banner.scss';

const Solution_banner = ({id}) => {
    const controls = useAnimation();
    const controls2 = useAnimation();

    const listVariants = {
        animate: { x: 0, opacity: 1, transition: { ease: 'anticipate', duration: 0.5 } },
        left: { x: -50, opacity: 0 }, right: { x: 50, opacity: 0 }
    }

    const variants = {
        hidden: { y: 100, x: -50, opacity: 0, },
        hidden2: { y: 100, x: 50, opacity: 0 },
        top: { y: 100, opacity: 0 },
        visible: { y: 0, x: 0, opacity: 1, }
    }

    useEffect(() => {
        const startAnimation = async () => {
            await controls.start('visible')
            await controls.start({
                y: [0, 5, 0],
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'linear'
                }
            })
        }
        const startAnimation2 = async () => {
            await controls2.start('animate')
            await controls2.start({
                scale: [0.9, 1, 0.9],
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'linear'
                }
            })
        }

        startAnimation2();
        startAnimation();

        return () => {
            controls.stop();
            controls2.stop();
        }
    }, [controls, controls2])

    return (
        <>
            <section className="banner_section" id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_area">
                                <div className="title">
                                    <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>See how we <span className='d-block'>handle projects</span> <span className='d-block'>with a strategic</span> edge</motion.h1>
                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>See how SAYNT AI streamlines your business with advanced solutions</motion.p>
                                </div>
                                <div className="button_group">
                                    <motion.div
                                        className="button_area"
                                        initial={{ x: -100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1, transition: { duration: 1, ease: 'anticipate' } }}

                                    >
                                        <Link href={'/contact'} className='btn-primary btn-black'>Get in touch</Link>
                                    </motion.div>
                                    <motion.div
                                        className="button_area"
                                        initial={{ x: 100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1, transition: { duration: 1, ease: 'anticipate' } }}
                                    >
                                        {/* <Link href='https://wa.me/923299346077' className='btn-primary btn-dark'>Request a Demo</Link> */}
                                    </motion.div>
                                </div>
                                <div className="cards_area">
                                    <Row className='align-items-end'>
                                        <Col xxl={5} xl={5} lg={5} md={4} sm={4} xs={4}>
                                            <ul className="cards">
                                                <motion.li
                                                    initial='hidden'
                                                    variants={variants}
                                                    animate={controls}
                                                    transition={{
                                                        duration: 0.6,
                                                    }}
                                                >
                                                    <div className="box">
                                                        <Image src={rec5} alt='...' title='...' priority={false} fetchPriority='low' />
                                                        <div className="icon">
                                                            <Image src={icon5} alt='...' title='' priority={false} fetchPriority='low' />
                                                        </div>
                                                    </div>
                                                </motion.li>
                                                <motion.li
                                                    initial='hidden'
                                                    variants={variants}
                                                    animate={controls}
                                                    transition={{
                                                        duration: 0.6,
                                                        delay: 0.2
                                                    }}
                                                >
                                                    <div className="box box2">
                                                        <Image src={rec6} alt='...' title='...' priority={false} fetchPriority='low' />
                                                        <div className="icon">
                                                            <Image src={icon6} alt='...' title='' priority={false} fetchPriority='low' />
                                                        </div>
                                                    </div>
                                                </motion.li>
                                                <motion.li
                                                    initial='hidden'
                                                    variants={variants}
                                                    animate={controls}
                                                    transition={{
                                                        duration: 0.6,
                                                        delay: 0.4
                                                    }}
                                                >
                                                    <div className="box box3">
                                                        <Image src={rec7} alt='...' title='...' priority={false} fetchPriority='low' />
                                                        <div className="icon">
                                                            <Image src={icon7} alt='...' title='' priority={false} fetchPriority='low' />
                                                        </div>
                                                    </div>
                                                </motion.li>
                                            </ul>
                                        </Col>
                                        <Col xxl={2} xl={2} lg={2} md={4} sm={4} xs={4}>
                                            <motion.div
                                                className="logo_box"
                                                initial='top'
                                                variants={variants}
                                                animate={controls}
                                                transition={{ duration: 2, ease: 'anticipate' }}
                                            >
                                                <Image src={rec1} alt='...' title='...' fetchPriority='low' priority={false} width={204} height={236} />
                                                <div className="logo">
                                                    <Image src={logo} alt='...' title='...' priority={false} fetchPriority='low' width={101} height={92} />
                                                </div>
                                            </motion.div>
                                        </Col>
                                        <Col xxl={5} xl={5} lg={5} md={4} sm={4} xs={4}>
                                            <ul className="cards">
                                                <motion.li
                                                    initial='hidden2'
                                                    variants={variants}
                                                    animate={controls}
                                                    transition={{ duration: 0.6 }}
                                                >
                                                    <div className=" box box4">
                                                        <Image src={rec2} alt='...' title='...' priority={false} fetchPriority='low' />
                                                        <div className="icon">
                                                            <Image src={icon8} alt='...' title='' priority={false} fetchPriority='low' />
                                                        </div>
                                                    </div>
                                                </motion.li>
                                                <motion.li
                                                    initial='hidden2'
                                                    variants={variants}
                                                    animate={controls}
                                                    transition={{ delay: 0.2, duration: 0.6 }}
                                                >
                                                    <div className="box box5">
                                                        <Image src={rec3} alt='...' title='...' priority={false} fetchPriority='low' />
                                                        <div className="icon">
                                                            <Image src={icon9} alt='...' title='' priority={false} fetchPriority='low' />
                                                        </div>
                                                    </div>
                                                </motion.li>
                                                <motion.li
                                                    initial='hidden2'
                                                    variants={variants}
                                                    animate={controls}
                                                    transition={{ delay: 0.4, duration: 0.6 }}
                                                >
                                                    <div className="box box6">
                                                        <Image src={rec4} alt='...' title='...' priority={false} fetchPriority='low' />
                                                        <div className="icon">
                                                            <Image src={icon10} alt='...' title='' priority={false} fetchPriority='low' />
                                                        </div>
                                                    </div>
                                                </motion.li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                                <motion.div className="img_wrapper" variants={listVariants} initial='left' animate={controls2}>
                                    <Image src={rec8} alt='...' title='...' fetchPriority='low' priority={false} />
                                    <div className="icon">
                                        <Image src={icon11} alt='...' title='...' fetchPriority='low' priority={false} />
                                    </div>
                                </motion.div>
                                <motion.div className="img_wrapper wrapper2" variants={listVariants} initial='right' animate={controls2}>
                                    <Image src={rec9} alt='...' title='...' fetchPriority='low' priority={false} />
                                    <div className="icon">
                                        <Image src={icon12} alt='...' title='...' fetchPriority='low' priority={false} />
                                    </div>
                                </motion.div>
                                <motion.div className="img_wrapper empty_card" variants={listVariants} initial='left' animate={controls2}>
                                    <Image src={rec10} alt='...' title='...' fetchPriority='low' priority={false} />
                                </motion.div>
                                <motion.div className="img_wrapper empty_card2" variants={listVariants} initial='right' animate={controls2}>
                                    <Image src={rec11} alt='...' title='...' fetchPriority='low' priority={false} />
                                </motion.div>
                                <motion.div className="img_wrapper empty_card3" variants={listVariants} initial='left' animate={controls2}>
                                    <Image src={rec12} alt='...' title='...' fetchPriority='low' priority={false} />
                                </motion.div>
                                <motion.div className="img_wrapper empty_card4" variants={listVariants} initial='right' animate={controls2}>
                                    <Image src={rec13} alt='...' title='...' fetchPriority='low' priority={false} />
                                </motion.div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="banner_img">
                    <Image src={banner1} title='...' alt='...' fetchPriority='low' priority={false} />
                </div>
            </section>
        </>
    )
}

export default Solution_banner