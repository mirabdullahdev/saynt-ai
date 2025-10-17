import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/pages/solution_action.scss'
import plateImg from '../../../../public/images/plate_img.png';
import footerImg from '../../../../public/images/footer_banner_bg.png'
import recImg1 from '../../../../public/images/action_sec_rec1.png'
import recImg2 from '../../../../public/images/action_sec_rec2.png'
import recImg3 from '../../../../public/images/action_sec_rec3.png'
import Image from 'next/image';

const Solution_action = ({id}) => {
    return (
        <section className='solution_action_section' id={id}>
            <div className='rec_img1'>
                <Image 
                    src={recImg1}
                    alt='...'
                    title='...'
                    priority
                />
            </div>
            <div className='rec_img2'>
                <Image 
                    src={recImg2}
                    alt='...'
                    title='...'
                    priority
                />
            </div>
            <div className='rec_img3'>
                <Image 
                    src={recImg3}
                    alt='...'
                    title='...'
                    priority
                />
            </div>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                        <div className='parent_area'>
                            <Row>
                                <Col xxl={4} xl={4} lg={4} md={4} sm={4} xm={12}>
                                    <div className='left_area'>
                                        <h3>Solutions In Action</h3>
                                        <p>See how SAYNT AI boosts efficiency in these quick demos</p>
                                    </div>
                                </Col>
                                <Col xxl={8} xl={8} lg={8} md={8} sm={8} xm={12}>
                                    <div className='right_area'>
                                        <div className='plate_img_area'>
                                            <Image 
                                                src={plateImg}
                                                alt='...'
                                                title='...'
                                                priority
                                            />
                                        </div>
                                        <div className='image_area'>
                                            <Image 
                                                src={footerImg}
                                                alt='...'
                                                title='...'
                                                priority
                                            />
                                        </div>
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

export default Solution_action