'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/pages/footer.scss';
import Link from 'next/link';
import logoImg from '../../../../public/images/white_logo.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';




const Footer = () => {

    let navLinks = [
        {
            href: "/",
            text:"Home"
        },
        {
            href: "/solutions",
            text:"Solutions"
        },
        {
            href: "/about_us",
            text:"About Us"
        },
        {
            href: "/blogs",
            text:"Blogs"
        },
        
        // {
        //     href: "/contact",
        //     text:"Contact Us"
        // },
        {
            href: "/careers",
            text:"Careers"
        },
        {
            href: "/ai_academy",
            text:"AiCademy"
        },
    ]

    const pathname = usePathname();
    

    return (
         <section className='footer_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                        <div className='parent_area'>
                            <Row>
                                <Col xxl={8} xl={7} lg={9} md={12} sm={12} xm={12}>
                                    <div className='left_area'>
                                        <div className='text_area'>THIS IS US</div>
                                        <div className='list_area'>
                                            <ul>
                                            {
                                                navLinks.map((element , index)=>{
                                                return<li key={index} className={`${element.href !== "/ai_academy" &&  pathname === element.href ? 'active' : ''} ${index === navLinks.length - 1 ? 'last_item' : ''}`} >
                                                    <Link href={element.href}>{element.text}</Link>
                                                </li>
                                                })
                                            }
                                            </ul>
                                        </div>
                                        <div className='logo_text_area'>
                                            <div className='logo_area'>
                                                <Image src={logoImg} alt="..." title="..." priority/>
                                            </div>
                                            <div className='text'>SAYNT AI</div>
                                        </div>
                                        <div className='top_arrow' onClick={() => document.documentElement.scrollTo({top: 0})}>
                                            <i className="bi bi-arrow-up"></i>
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={4} xl={5} lg={3} md={12} sm={12} xm={12}>
                                    <div className='right_area'>
                                        <div className='upper_area'>
                                            <div className='detail_area'>
                                                <h3>Location</h3>
                                                <Link href='#'>23-C, Phase VI DHA, Sehar Commercial, Phase 7, Karachi</Link>
                                            </div>
                                            <div className='detail_area'>
                                                <h3>Email</h3>
                                                <Link href='mailto:contact@saynt.org'>sayntheadquarter@gmail.com</Link>
                                            </div>
                                            <div className='detail_area'>
                                                <h3>Contact Us</h3>
                                                <Link href='tel:923299346077'>+92 3299346077</Link>
                                            </div>
                                            <div className='detail_area'>
                                                <h3>Mon—Fri</h3>
                                                <Link href='#'>9am—6pm</Link>
                                            </div>
                                        </div>
                                        <div className='copyright_area'>
                                        © 2024 — SAYNT-AI
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className='banner_area'>
                                <div className='inner_left'>
                                    <h3>Explore our success</h3>
                                    <ul>
                                        <li>
                                            <Link href="https://www.facebook.com/people/Saynt/61558681650933/">
                                                <i className="bi bi-facebook"></i>  
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.instagram.com/saynt.ai/ ">
                                            <i className="bi bi-instagram"></i> 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.linkedin.com/company/saynt-ai/?originalSubdomain=pk ">
                                            <i className="bi bi-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='inner_right'>
                                    <Link href="/"><i className="bi bi-arrow-up-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section> 
    )
}

export default Footer