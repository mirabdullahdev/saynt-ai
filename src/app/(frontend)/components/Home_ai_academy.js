import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import clock2 from '../../../../public/images/clock2.png';
import search from '../../../../public/images/search.png';
import idea from '../../../../public/images/idea.png';
import strain from '../../../../public/images/strain.png';
import side_img from '../../../../public/images/ai_banner_img.png';
import '../../../../public/sass/home_scss/home_ai.scss'
import Link from 'next/link';

const Home_ai_academy = ({ id }) => {
    return (
        <section className='home_ai' id={id}>
            <div className="gradient_big"></div>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="parent_area">
                            <div className="left">
                                <h3><strong>Solutions</strong> in Action: <strong>Aicademy</strong> – Revolutionizing Education</h3>
                                <p>At <strong>Saynt AI, </strong>we don’t just build AI-powered business solutions—we create <strong> real-world impact</strong>. One of our proudest innovations is Aicademy, an AI-driven learning companion designed to <strong>make quality education accessible and affordable</strong> for every student in Pakistan.</p>
                                <ul>
                                    <li>
                                        <div className="img_wrapper">
                                            <Image src={clock2} alt='...' title='...' fetchPriority='low' width={46} height={46} />
                                        </div>
                                        <h3>Track Your Progress</h3>
                                        <p> Stay motivated with real-time insights into your learning journey</p>
                                    </li>
                                    <li>
                                        <div className="img_wrapper">
                                            <Image src={search} alt='...' title='...' fetchPriority='low' width={46} height={46} />
                                        </div>
                                        <h3>Bridging the Education Gap</h3>
                                        <p> Personalized AI tutoring that adapts to individual learning needs.</p>
                                    </li>
                                    <li>
                                        <div className="img_wrapper">
                                            <Image src={idea} alt='...' title='...' fetchPriority='low' width={46} height={46} />
                                        </div>
                                        <h3>Beyond Rote Learning</h3>
                                        <p>  AI-driven conceptual learning, progress tracking, and smart study planning</p>
                                    </li>
                                    <li>
                                        <div className="img_wrapper">
                                            <Image src={strain} alt='...' title='...' fetchPriority='low' width={46} height={46} />
                                        </div>
                                        <h3>Reducing Financial Strain</h3>
                                        <p> Affordable learning that eliminates the need for costly tutors</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="right">
                                <div className="img_wrapper">
                                    <Image src={side_img} alt='...' title='...' fetchPriority='low' />
                                </div>
                            </div>
                        </div>
                        <div className="btn_area text-center">
                            <Link href={'/ai_academy/'} className='btn-primary btn-black'>Learn More About Aicademy</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home_ai_academy
