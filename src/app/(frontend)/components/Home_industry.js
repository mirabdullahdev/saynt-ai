'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/home_scss/home_industry.scss'
import img1 from '../../../../public/images/home_blog1.jpg'
import img2 from '../../../../public/images/deepseek.png'
import img3 from '../../../../public/images/world.webp'
import Image from 'next/image'
import { getApi, publicPath } from '@/frontend/helpers'

const Home_industry = ({ id }) => {
//     const cardsData = [
//         {
//             image: img1,
//             tag: "SEO",
//             time: "5 min. read",
//             title: "Tech Giants' Stock Volatility: Understanding the Market’s Reaction to AI",
//             desc: `A financial analysis of how AI advancements impact the stock market, particularly tech giants.`,
//         },
//         {
//             image: img2,
//             tag: "PPC",
//             time: "5 min. read",
//             title: "China’s DeepSeek AI: A New Challenger in the AI Race ",
//             desc: `An analysis of China’s DeepSeek AI and its impact on global AI
// competition.`,
//         },
//         {
//             image: img3,
//             tag: "Tips & trick",
//             time: "5 min. read",
//             title: "Can AI Help You Study Better? Exploring AI-Powered Learning Tools",
//             desc: `A deep dive into how AI-driven educational tools enhance learning
// experiences and efficiency F`
//         },
//     ];
    const BASE_URL = process.env.BASE_URL
    const [blogData, setBlogData] = useState([])

    async function getBlogs() {
        try {
            const res = await getApi(`/api/blog/get-blogs?status=publish&limit=3`)
            setBlogData(res?.data?.data)
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    }

    useEffect(() => {
        getBlogs()
    }, [])

    useEffect(() => {
        console.log(blogData)
    }, [blogData])

    return (
        <section className='home_industry_section' id={id}>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <div className='upper_area'>
                                <h3>BLOGS</h3>
                                <div className='btn_text_area'>
                                    <p>
                                        Blogs of Industry affairs, in which decision makers are interested
                                    </p>
                                    <Link href="/blogs" className='btn-primary btn-light'>View all Blogs <i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                            <div className='cards_area'>
                                {blogData && blogData.map((card, index) => (
                                    <Link href={`blog_detail/${card._id}`} key={index} className={`card_inner card-${index + 1}`}>
                                        <div className="image_area">
                                            <div className="desc">{card.desc}</div>
                                            <Image
                                                src={publicPath(card.image)}
                                                alt="..."
                                                title="..."
                                                priority
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                        <div className="content">
                                            <div className="tag_area">{card.categoryTitle}</div>
                                            {/* <span>{card.time}</span> */}
                                        </div>
                                        <h3>{card.title}</h3>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home_industry
