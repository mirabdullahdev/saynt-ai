import React from 'react'
import '../../../../public/sass/home_scss/home_hero_section.scss';
import { Col, Container, Row } from 'react-bootstrap';


const Home_service_banner = ({id}) => {
    return (
        <section className='home_service_banner_section' id={id}>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                        <div className='parent_area'>
                            <h3>Who We Help & How We Help</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home_service_banner