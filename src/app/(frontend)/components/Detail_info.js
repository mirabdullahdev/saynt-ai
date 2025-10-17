import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/blog_detail_scss/detail_info.scss'

const Detail_info = ({id, description,created_at,categoryTitle}) => {
    const data = [
        { name: 'Publication Date', value: new Date(created_at).toDateString()},
        { name: 'Category', value: categoryTitle },
        // { name: 'Reading Time', value: '10 Min' },
        // { name: 'Author Name', value: 'Dr. Emily Walker' }
    ]
    const list = ['Introduction','AI in Diagnostic Imaging','Predictive Analytics and Disease Prevention','Personalized Treatment Plans','Drug Discovery and Research','AI in Telemedicine','Ethical Considerations','The Future of AI in Healthcare','Conclusion']
    return (
        <section className='detail_info_section' id={id}>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <div className='left_area'>
                                {/* <div className='intro_area'>
                                    <h3>Introduction</h3>
                                    <p>Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.</p>
                                </div> */}
                                <div className='main_content text-white' dangerouslySetInnerHTML={{__html: description}}/>
                            </div>
                            <div className='right_area'>
                                {/* <div className="social_area">
                                    <div className='chip'><span><i className="bi bi-heart-fill"></i></span>24.5k</div>
                                    <div className='chip'><span><i className="bi bi-eye"></i></span>50k</div>
                                    <div className='chip'><span><i className="bi bi-send"></i></span>206</div>
                                </div> */}
                                <div className="content">
                                    <div className="published_area">
                                        <ul>
                                            {
                                                data.map((item, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <div className="top">{item.name}</div>
                                                            <div className="bottom">{item.value}</div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    {/* <div className="table_contents">
                                        <p>Table of Contents</p>
                                        <ul className="listing">
                                            {
                                                list.map((item,i) =>(
                                                    <li key={i}>{item}</li>
                                                ))
                                            }
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Detail_info