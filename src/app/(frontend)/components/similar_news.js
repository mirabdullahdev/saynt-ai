'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Blog_card from './blog_card'
import '../../../../public/sass/blog_detail_scss/similar.scss';
import { getApi } from '@/frontend/helpers'
import { usePathname } from 'next/navigation'

const Similar_news = ({ id, sec_title, btn_text }) => {
    const [blogData, setBlogData] = useState([])
    const pathname = usePathname()
    
    async function getBlogs() {
        try {
            let limitParam = pathname !== "/blogs" ? "&limit=3" : "";
            const res = await getApi(`/api/blog/get-blogs?status=publish&${limitParam}`)
            setBlogData(res?.data?.data)
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    }

    useEffect(() => {
        getBlogs()
    }, [])
    return (
        <>
            { blogData && blogData.length ? 
            <section className="news" id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_area">
                                <div className="title_area">
                                    <h3>{sec_title}</h3>
                                    {
                                        btn_text &&
                                        <div className="button_area">
                                            <Link href={'/blogs'} className='view_all'>
                                                {btn_text}
                                                <span> <i className="bi bi-arrow-up-right"></i></span>
                                            </Link>
                                        </div>
                                    }
                                </div>
                                <div className="cards">
                                    <Row className='row-gap-3'>
                                        {
                                            blogData?.map((blog, i) => (
                                                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12} key={i}>
                                                    <Blog_card id={blog._id} sec_title={sec_title} title={blog.title} desc={blog.description} src={blog.image} c_title={blog.categoryTitle}/>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            : ""    
            }
        </>
    )
}

export default Similar_news