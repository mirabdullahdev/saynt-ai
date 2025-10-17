"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import profileImg from '../../../../public/admin/images/profile.jpg';
import profileImg3 from '../../../../public/admin/images/profile3.png';
import '../../../../public/admin/sass/pages/navTop.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Dropdown, Form } from 'react-bootstrap';
import { faAngleLeft, faBars, faCog, faFilter, faSignOutAlt, faTimesCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { getApi } from '@/frontend/helpers';
import { redirect } from 'next/navigation';


const NavTop = (props) => {

    const handleLogout = async () => {
        let res = await getApi("/api/auth/logout");
        if(res.status) {
            redirect("/admin/login")
        }
    }

    return (
        <div className='nav_area'>
            {/* <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}> */}
                    <div className='inner_area'>

                        <div className='nav_top'>
                            <div className='bar_icon'>
                                {/* <FontAwesomeIcon icon={faBars} /> */}
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <div className='profile_area'>
                                        <div className='profile_img'>
                                            <Image src={profileImg3} alt='...' fetchPriority='low' />
                                        </div>
                                        <div className='dot'></div>
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {/* <Dropdown.Item href="#">
                                        <div className='top'>
                                            <div className='profile_left'>
                                                <div className='user_profile'>
                                                    <div className='profile_area'>
                                                        <div className='profile_img'>
                                                            <Image src={profileImg3} alt='...' fetchPriority='low' />
                                                        </div>
                                                        <div className='dot'></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='profile_right'>
                                                <div className='user_name'>John Doe</div>
                                                <div className='admin'>Admin</div>
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <div className='mid'><span className='profile_icon'><FontAwesomeIcon icon={faUser} /></span> My Profile</div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <div className='mid'><span className='profile_icon'><FontAwesomeIcon icon={faCog} /></span> Setting</div>
                                    </Dropdown.Item> */}
                                    <Dropdown.Item href="#">
                                        <div className='bottom' onClick={handleLogout}>
                                            <span className='profile_icon'><FontAwesomeIcon icon={faSignOutAlt} /></span> Log out
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='nav_btm'>
                            <div className='left'>
                                <div className='title'>
                                    Manage {props.title}
                                </div>
                            </div>
                            <div className='right'>
                                {
                                    props.addUrl ? (
                                        <Link href={props.addUrl} className='btn_area'>
                                            <div className='back_btn'>
                                                New
                                            </div>
                                        </Link>
                                    ) : ""
                                }
                                {
                                    props.editUrl ? (
                                        <Link href={props.editUrl} className='btn_area'>
                                            <div className='back_btn'>
                                                Edit
                                            </div>
                                        </Link>
                                    ) : ""
                                }
                                {
                                    props.backUrl ? (
                                        <Link href={props.backUrl} className='btn_area'>
                                            <div className='back_btn'>
                                                <span><FontAwesomeIcon icon={faAngleLeft} /></span>  Back
                                            </div>
                                        </Link>
                                    ) : ""
                                }
                                {props.children}
                            </div>
                        </div>
                    </div>
                {/* </Col>
            </Row> */}
        </div>
    )
}
export default NavTop;