'use client'
import React, { useEffect, useState } from 'react'
import '../../../../public/sass/pages/solution_calender.scss';
import { Button, Col, Container, Form, Modal, Row, Spinner } from 'react-bootstrap';
import arrowDown1 from '../../../../public/images/arrow_down.png';
import arrowDown2 from '../../../../public/images/arrow_down2.png';
import world_clock from '../../../../public/images/world_clock.png';
import clock from '../../../../public/images/clock.png';
import meeting from '../../../../public/images/meet.png';
import user from '../../../../public/images/user.png';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { toast } from 'react-toastify';
import { formatDate } from '@/frontend/helpers';
import Main_modal from './modal';
const Calendar = dynamic(() => import('react-calendar'), {
    ssr: false,
    loading: () => <p style={{ color: 'black', fontSize: 14, fontWeight: 400 }}>Calender is Loading...</p>
})
const TimePicker = dynamic(() => import('react-time-picker'), {
    ssr: false,
    loading: () => <p style={{ color: 'black', fontSize: 14, fontWeight: 400 }}>Time is Loading...</p>
})

const Solution_calender = ({ id }) => {
    const [active, setActive] = useState(0);
    const [val, setVal] = useState('');
    const [modalShow, setModalShow] = useState(false);

    const todayDate = new Date();

    const [appointment, setAppointment] = useState(todayDate);
    const [show, setShow] = useState(false);

    const cardData = [
        {
            step: 'Step 1',
            title: 'Book a Time That Works for You',
            description: "Pick a time that suits your schedule — we're flexible!",
        },
        {
            step: 'Step 2',
            title: 'Help Us Understand You',
            description: "We’ll ask a few quick questions so we come prepared with ideas tailored to your goals.",
        },
        {
            step: 'Step 3',
            title: 'Jump on a Quick 20-Minute Call',
            description: "Let’s connect, explore your vision, and see how we can bring AI into your business journey.",
        },
    ];
    // const cardData = [
    //     {
    //         step: 'Step 1',
    //         title: 'Schedule Some Time',
    //         description: 'Choose a time that suits you best',
    //     },
    //     {
    //         step: 'Step 2',
    //         title: 'Meeting Preparation',
    //         description: 'Few Questions and Answers to find what you need',
    //     },
    //     {
    //         step: 'Step 3',
    //         title: '20 Minute Intro Call',
    //         description: 'Let’s Know each other and discuss how we can integrate AI into your business!',
    //     },
    // ];

    const meet = [
        { src: world_clock, txt: '20m' },
        { src: meeting, txt: 'Googel Meet' },
        { src: clock, txt: 'Asia/Karachi' }
    ];

    function handleActive(i, e) {
        setVal(e.target.innerText)
        setActive(i)
    }

    const handleCalendarChange = (value) => {
        let newDate = new Date(value);
        newDate.setHours(appointment.getHours(), appointment.getMinutes(), appointment.getSeconds());
        setAppointment(newDate);
    }

    const handleTimeChange = (value) => {
        let timeArr = value.split(":");
        let newDate = new Date(appointment);
        newDate.setHours(timeArr[0], timeArr[1], 0);
        setAppointment(newDate);
    }

    const handleStartedClick = (e) => {
        e.preventDefault();
        let todayDate = new Date();
        if (todayDate >= appointment) {
            toast.error("Please select an upcoming time!")
        }
        else {
            setShow(true);
        }
    }

    useEffect(() => {
        const inputGroup = document.querySelector('.react-time-picker__inputGroup');
        if (!inputGroup) return;

        const select = inputGroup.childNodes;

        if (val === '24h') {
            select[select.length - 1].style.display = 'none';
            select[select.length - 2].style.display = 'none';
        } else {
            select[select.length - 1].style.display = 'block';
            select[select.length - 2].style.display = 'block';
        }

        return () => {
            if (inputGroup) {
                select[select.length - 1].style.display = 'block';
                select[select.length - 2].style.display = 'block';
            }
            setShow(false)
        };
    }, [val]);

    return (
        <>
            <section className='solution_calender_section' id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <div className='upper_area'>
                                    <h3>Ready to <span style={{ fontWeight: 700 }}>streamline</span> your <span style={{ fontWeight: 700 }}>operations</span>?</h3>
                                    <p className='green'>Let us know what challenges you’re facing.</p>
                                    <p>Whether it’s fleet optimization, compliance, or cost reduction, we’ll help you pinpoint areas for improvement.
                                        <br></br>Why it matters: You get personalized advice tailored to your business</p>
                                </div>
                                <div className='cards_area'>
                                    <div className="gradient"></div>
                                    <div className='arrow_img1'>
                                        <Image src={arrowDown1} alt='...' title="..." priority />
                                    </div>
                                    <div className='arrow_img2'>
                                        <Image src={arrowDown2} alt='...' title="..." priority />
                                    </div>
                                    {cardData.map((card, index) => (
                                        <div
                                            className={`card_inner ${index % 2 !== 0 ? 'even' : ''}`}
                                            key={index}
                                        >
                                            <div className='circle_area'>{card.step}</div>
                                            <div className='content_area'>
                                                <h3>{card.title}</h3>
                                                <p>{card.description}</p>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                                <Form action="" onSubmit={(e) => e.preventDefault()}>
                                    <div className="calender_area">
                                        <Row className='row-gap-4'>
                                            <Col xxl={3} xl={3} lg={6} md={6} sm={6} xs={12} className='order-sm-1 order-1'>
                                                <div className="left">
                                                    <div className="top">
                                                        {/*
                                                        <div className="img_area bg-white">
                                                            <Image src={user} alt='...' title='...' fetchPriority='low' priority={false} width={46} height={46} />
                                                        </div>
                                                        */}
                                                        <div className="user_name">Schedule a call with us</div>
                                                        <div className="meet">20 Minutes Meeting</div>
                                                    </div>
                                                    <div className="bottom">
                                                        <ul>
                                                            {
                                                                meet &&
                                                                meet.map((item, i) => (
                                                                    <li key={i}>
                                                                        <div className="left_meet">
                                                                            <Image src={item.src} alt='...' title='...' fetchPriority='low' priority={false} width={20} height={20} />
                                                                        </div>
                                                                        <div className="right_meet">{item.txt}</div>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xxl={6} xl={6} lg={12} md={12} sm={12} xs={12} className='order-xl-1 order-sm-3 '>
                                                <div className="center ">
                                                    <Calendar
                                                        className={'cal'}
                                                        tileClassName={'tile'}
                                                        onChange={handleCalendarChange}
                                                        minDate={todayDate}
                                                        value={appointment}

                                                    />
                                                </div>
                                            </Col>
                                            <Col xxl={3} xl={3} lg={6} md={6} sm={6} xs={12} className='order-sm-2 order-0'>
                                                <div className="right ">
                                                    <div className='inner_right'>
                                                        <div className="top">
                                                            <div className="left_clock">{appointment.toLocaleDateString('en-US', { weekday: 'short', month: 'short' })} <span>{appointment.getDate()}</span></div>
                                                            <div className="right_clock">
                                                                <div className="format">
                                                                    {
                                                                        ['12h', '24h'].map((item, i) => (
                                                                            <div
                                                                                key={i}
                                                                                onClick={(e) => handleActive(i, e)}
                                                                                className={`box ${active == i ? 'active' : ''}`}
                                                                            >
                                                                                {item}
                                                                            </div>
                                                                        ))
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div className="time">{active == 0 ? '12:00 am' : '11:59'}</div> */}
                                                        <div className="time">
                                                            <TimePicker
                                                                disableClock={true}
                                                                autoFocus={false}
                                                                value={appointment}
                                                                format={val == '24h' ? 'H-m-a' : 'h-m-a'}
                                                                onChange={handleTimeChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="button_area">
                                                        <button className='btn-primary btn-black' onClick={handleStartedClick}>GET STARTED</button>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Main_modal show={show} setShow={setShow} type="bookAppointment" appointment={appointment} />
        </>
    )
}

export default Solution_calender
