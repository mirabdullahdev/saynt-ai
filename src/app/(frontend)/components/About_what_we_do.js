import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card from './Card';
import '../../../../public/sass/home_scss/home_cards_section.scss'


const About_what_we_do = ({ id }) => {

    const cardData = [
        {
            heading: 'AI Solution and Automation',
            description: 'Revolutionize your processes with cutting-edge AI solutions. Automate workflows for smarter, faster decision-making.',
        },
        {
            heading: 'Mobile App Development',
            description: 'Building intuitive mobile apps that enhance user experience. Stay connected with your audience anytime, anywhere.',
        },
        {
            heading: 'Custom Software Development',
            description: 'Tailored software solutions to meet your unique business needs. Empowering efficiency and growth with innovative applications.',
        },
        {
            heading: 'Website Development',
            description: 'Stunning, responsive websites designed to captivate and convert. Transform your online presence with cutting-edge web solutions.',
        },
        {
            heading: 'UI/UX Designing',
            description: 'Creating user-centric designs that blend aesthetics with functionality. Elevate user experience with seamless and engaging interfaces',
        },
        {
            heading: 'Free Tech Consultancy',
            description: 'Expert guidance to solve your tech challenges at no cost. Your partner in identifying the right technology solutions.',
        },
    ];
    return (
        <>
            <section className='home_cards_section' id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <h3>What We <span>Do</span></h3>
                                <Row>
                                    {cardData.map((card, index) => (
                                        <Col key={index} xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <Card
                                                heading={card.heading}
                                                description={card.description}
                                                className={`card_${index + 1}`}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="gradient"></div>
            </section>
        </>
    )
}

export default About_what_we_do