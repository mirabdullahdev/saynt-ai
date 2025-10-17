import React from 'react'
import '../../../../public/sass/blog_scss/blog_headline.scss'

const Blogs_headline = ({ id }) => {
    return (
        <>
            <section className='blog_headline_section' id={id}>
                <div className='parent_area'>
                    <h3>HEADLINES!</h3>
                    <div className='img_txt_area'>
                        <h4>SAYNT AI TO EXPAND INTO GLOBAL MARKETS</h4>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs_headline