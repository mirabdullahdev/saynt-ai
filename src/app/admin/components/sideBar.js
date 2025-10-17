"use client";
import React, {useEffect, useRef, useState} from 'react';
import '../../../../public/admin/sass/pages/sidebar.scss';
import {
    faAddressCard,
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faBlog,
    faDashboard,
    faFileAlt
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const sideBarLinks = [
    {
        id: 0,
        title: "Dashboard",
        icon: faDashboard,
        link: "/admin/dashboard",
    },
    {
        id: 1,
        title: "Contact Us",
        icon: faAddressCard,
        link: "/admin/contact-us",
    },
    {
        id: 2,
        title: "Blogs",
        icon: faBlog,
        link: [
            {
                id: 21,
                title: "Blogs",
                link: "/admin/blogs",
            },
            {
                id: 22,
                title: "Blogs Categories",
                link: "/admin/blogs/categories",
            }
        ],
    }
];

const SideBar = (props) => {
    const {
        toggleSidebar,
        isSidebarOpen
    } = props;
    const [show, setShow] = useState(null);
    const [active, setActive] = useState(false);
    const listingRef = useRef();

    let path = usePathname();

    useEffect(() => {
        listingRef.current.addEventListener('scroll', () => {
            if (listingRef.current.scrollTop > 2) {
                setActive(true)
            } else {
                setActive(false)
            }
        })
        return () => setActive(false)
    }, []);

    const showFunc = (val) => {
        if (show === val) {
            setShow(null)
        } else {
            setShow(val)
        }
    };

    return (
        <div className='sidebar'>
            {isSidebarOpen && <div className='d-xl-none d-block'>
                <div className='close' onClick={() => toggleSidebar()}>
                    <FontAwesomeIcon icon={faAngleLeft}/>
                </div>
            </div>}
            <div className='logo_area'>
                <div className='logo_title'>webapp</div>
                <div className={`menu_inner_shadow ${active ? 'show' : ''}`}></div>
                <div className='nav_listing' ref={listingRef}>
                    <ul className='nav_links'>
                        {
                            sideBarLinks.map(item => {
                                if (Array.isArray(item.link)) {
                                    return (
                                        <li key={item.id} onClick={() => showFunc('Blogs')}>
                                            <Link href="#" className='link_area'>
                                                <div className='dropDown_area'>
                                                    <div className='dropDown'>
                                                        <div className='left_side'>
                                                            <span className='icon'>
                                                                <FontAwesomeIcon icon={item.icon}/>
                                                            </span>
                                                            <span className='title'>
                                                                {item.title}
                                                            </span>
                                                        </div>
                                                        <div className='right_side'>
                                                            <span className='right_arrow'>
                                                                {show === "Pages" ? <FontAwesomeIcon icon={faAngleDown}/> :
                                                                    <FontAwesomeIcon icon={faAngleRight}/>}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className={`dropDown_content ${show === "Blogs" ? 'show' : ''}`}>
                                                <ul>
                                                    {
                                                        item.link.map(subItem => {
                                                            return <li key={subItem.id}>
                                                                <Link href={subItem.link} className='dropDownItem'>
                                                                    {subItem.title}
                                                                </Link>
                                                            </li>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </li>
                                    )
                                } else {
                                    return <li key={item.id}>
                                        <Link href={item.link}
                                              className={`link_area ${path.includes(item.link) ? "active" : ""}`}>
                                        <span className='icon'>
                                            <FontAwesomeIcon icon={item.icon}/>
                                        </span>
                                            <span className='title'>
                                            {item.title}
                                        </span>
                                        </Link>
                                    </li>
                                }
                            })
                        }
                        <li>
                            <div className='menu_header'>
                                <span className='seperator'>Others</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar;