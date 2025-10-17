'use client'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import logoImg from '../../../../public/images/logo.png';
import '../../../../public/sass/pages/header.scss';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {

    let navLinks = [
        {
            href: "/",
            text: "Home"
        },
        {
            href: "/solutions",
            text: "Hot Solutions"
        },
        {
            href: "/calling_agent",
            text: "Ai Calling Agent"
        },
        {
            href: "/ai_academy",
            text: "AICademy"
        },
        {
            href: "/about_us",
            text: "About Us"
        },
        {
            href: "/blogs",
            text: "Blogs"
        },
        // {
        //     href: "/contact",
        //     text: "Contact Us"
        // },
        {
            href: "/careers",
            text: "Careers"
        },
    ]

    const pathname = usePathname();

    const [isResponsiveHeaderVisible, setIsResponsiveHeaderVisible] = useState(false);

    const toggleResponsiveHeader = () => {
        setIsResponsiveHeaderVisible(!isResponsiveHeaderVisible);
    };

    const handleHeader = () => {
        setIsResponsiveHeaderVisible(false)
    }

    useEffect(() => {
        if (isResponsiveHeaderVisible) {
            document.body.classList.add('scroll_off');
        } else {
            document.body.classList.remove('scroll_off');
        }

        return () => document.body.classList.remove('scroll_off');
    }, [isResponsiveHeaderVisible]);

    return (
        <>
            <section className='header_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                            <div className='parent_area'>
                                <div className='logo_area'>
                                    <Image src={logoImg} alt="..." title="..." priority />
                                </div>
                                <div className='list_area'>
                                    <ul>
                                        {
                                            navLinks.map((element, index) => {
                                                return <li key={index} className={`${element.href !== "/ai_academy" && pathname === element.href ? 'active' : ''} ${index === navLinks.length - 4 ? 'last_item' : ''}`} >
                                                    <Link href={element.href}>{element.text}
                                                    </Link>
                                                    {/* {
                                                        element.href == '/solutions' ?
                                                            <Dropdown className='show' show>
                                                                <Dropdown.Toggle  href={element.href} id="dropdown-basic" aria-expanded="false" className="dropdown-toggle show">{element.text}
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href={element.href}>{element.text}</Dropdown.Item>
                                                                    <Dropdown.Item href="/calling_agent">Ai Calling Agent</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            :
                                                            <Link href={element.href}>{element.text}
                                                            </Link>
                                                    } */}
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className='menu_area d-block d-lg-none' onClick={toggleResponsiveHeader} >
                                    <i className="bi bi-list"></i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className={`responsive_header ${isResponsiveHeaderVisible ? 'show' : ''}`}>
                    <ul>
                        {
                            navLinks.map((element, index) => {
                                return <li key={index} className={`${element.href !== "/ai_academy" && pathname === element.href ? 'active' : ''} ${index === navLinks.length - 1 ? 'last_item' : ''}`} >
                                    <Link href={element.href} onClick={handleHeader}>{element.text}</Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Header

{/* <section className='header_section'>
    <Container>
        <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className='parent_area'></div>
            </Col>
        </Row>
    </Container>
</section> */}