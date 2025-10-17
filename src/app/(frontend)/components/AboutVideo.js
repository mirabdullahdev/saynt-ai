import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import video from "../../../../public/images/video.jpg";
import "../../../../public/sass/about_scss/video.scss";
const AboutVideo = ({ id }) => {
    return (
        <>
            <section className="video_section" id={id}>
                <div className="parent_area">
                    <h3>
                        Our Origin Story
                    </h3>
                    <div className="video_area">
                        <div className='content'>
                            <div className='top'>One chilly evening in Karachi, a few friends (<span>fueled by chai and big dreams</span>) realized that businesses everywhere were struggling to adopt modern tech in a seamless way.</div>
                            <div className="box">
                                <div className="icon"><i className="bi bi-play-fill"></i></div>
                            </div>
                            <div className='top bottom'>The next day, <span>SAYNT AI was born</span>, founded on the simple idea that technology should empower business owners, not overwhelm them.
                            </div>
                        </div>
                        <div className="video_wrapper">
                            <Image src={video} alt='...' title='...' fetchPriority='low' width={1440} height={1000} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutVideo
