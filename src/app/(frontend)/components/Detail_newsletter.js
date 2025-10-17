import React from 'react'
import '../../../../public/sass/blog_detail_scss/blog_detail.scss'
import newsletterImg from '../../../../public/images/em.svg'
import logo from '../../../../public/images/big_logo.png'
import Image from 'next/image'



const Detail_newsletter = ({id}) => {
    return (
        <>
            <section className='detail_newsletter_section' id={id}>
                <div className='parent_area'>
                    <div className='upper_area'>
                        <div className='logo_area'>
                            <Image
                                src={logo}
                                alt='...'
                                title='...'
                                priority
                            />
                        </div>
                        <div className='content_area'>
                            <div className='tag'>Learn, Connect, and Innovate</div>
                            <h3>Be Part of the Future Tech Revolution</h3>
                            <p> subscribe to our newsletter</p>
                        </div>
                    </div>
                    <div className='image_area'>
                        <Image
                            src={newsletterImg}
                            alt='...'
                            title='...'
                            priority
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Detail_newsletter