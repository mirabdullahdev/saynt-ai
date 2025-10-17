import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/ai_scss/ai.scss'


const Ai_impact = () => {
    return (
        <section className='ai_impact_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <h3 className='animate_up'>The Impact of AI-Powered Learning</h3>
                            <p className='animate_up'>Transforming Education Through Intelligence and Innovation</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Ai_impact