import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/home_scss/home_choose.scss'
import Link from 'next/link';

const Home_choose = ({id}) => {

    const cardData = [
        {
            title: 'Smart Inventory Management for Retail Chains',
            description: 'Implemented an AI-driven system to track stock levels, predict demand, and automate restocking for a major retail chain.',
        },
        {
            title: 'AI-Powered Logistics Optimization',
            description: 'Developed route optimization software for a logistics company, reducing fuel consumption and delivery times',
        },
        {
            title: 'Fraud Detection for FinTech Startup',
            description: 'Designed a machine learning model to detect suspicious financial transactions, enhancing security and reducing fraud risks',
        },
    ];
    return (
        <>
            <section className='home_choose_section' id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                            <div className='parent_area'>
                                <div className='upper_area'>
                                    {/* <h6>Why Choose</h6> */}
                                    <h3>What is it that makes us different?</h3>
                                </div>
                                <div className='cards_area'>
                                    <Row>
                                        {cardData.map((card, index) => (
                                            <Col key={index} xxl={4} xl={4} lg={4} md={4} sm={6} xm={12}>
                                                <div className={`card_inner h-100 ${index % 2 === 0 ? 'even' : 'odd'}`}>
                                                    <h3>{card.title}</h3>
                                                    <p>{card.description}</p>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                                {/* <div className='button_area'>
                                    <Link href="/" className="btn-primary btn-green">More Projects <i className="bi bi-arrow-return-right"></i></Link>
                                </div> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Home_choose