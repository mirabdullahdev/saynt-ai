import Link from 'next/link'
import React from 'react'
import '../../../../public/sass/about_scss/about_work_together.scss'
import Image from 'next/image'
import starImg from '../../../../public/images/star_icon.png'

const About_work_together = ({id}) => {
    const repeatCount = 26;
    return (
        <>
            <section className='about_work_together_section' id={id}>
                <div className='parent_area'>
                    {/* <div className='button_area'>
                        <Link href="/" className='btn-primary btn-green'>
                            Intro
                        </Link>
                    </div> */}
                    {/* <h3>
                        VIDEO OF tHE WHOLE TEAM
                    </h3> */}
                    <div className="text_area_wrapper">
                        {Array.from({ length: repeatCount }).map((_, index) => (
                            <div key={index} className={`text_area block-${index + 1}`}>
                                <p className='pt-0'>Let’s Work Together</p> 
                                <div className="icon_area">
                                    <Image
                                        src={starImg}
                                        alt="Star Icon"
                                        title="Star Icon"
                                        priority
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default About_work_together