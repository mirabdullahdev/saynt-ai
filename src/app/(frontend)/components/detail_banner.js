import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/blog_detail_scss/blog_detail.scss'
import Image from 'next/image'
import { publicPath } from '@/frontend/helpers'

const Detail_banner = ({ id, image, title }) => {
    const BASE_URL = process.env.BASE_URL
    return (
        <>
            <section className='detail_banner_section' id={id}>
                <div className="banner_img">
                    {image ? <Image src={publicPath(image)} alt='...' title='....' fetchPriority='low' priority={false} width={500} height={500} />: null}
                </div>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <h3>{title}</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Detail_banner