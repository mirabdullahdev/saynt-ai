import React from 'react'
import '../../../../public/sass/pages/solution_projects.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import footerBg from '../../../../public/images/footer_banner_bg.png';
import Link from 'next/link';

const Solution_projects = ({id}) => {

    const cardData = [
        {
            image: footerBg,
            title: "UI/UX Overhaul for ABC App",
            link: "#",
        },
        {
            image: footerBg,
            title: "Crafting a Bold Look for DEF Products",
            link: "#",
        },
        {
            image: footerBg,
            title: "Rebranding XYZ Corp for the Digital",
            link: "#",
        },
    ];
    
    return (
        <section className='solution_projects_section' id={id}>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                        <div className='parent_area'>
                            <h3>Get a glimpse of our strategy-<span>driven projects</span></h3>
                            <div className='cards_area'>
                                <Row>
                                {cardData.map((card, index) => (
                                    <Col key={index} xxl={4} xl={4} lg={4} md={6} sm={6} xm={12}>
                                        <div className='card_inner'>
                                            <div className='image_area'>
                                                <Image src={card.image} alt="..." title="..." priority />
                                            </div>
                                            <div className='heading_learn_area'>
                                                <h4>{card.title}</h4>
                                                <Link href={card.link}>Learn more</Link>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Solution_projects