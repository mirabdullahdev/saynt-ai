import React from 'react'
import Blog_newsletter from '../components/Blog_newsletter'
import Blogs_headline from '../components/Blogs_headline'
import Blog_category from '../components/Blog_category'
import Blog_banner from '../components/Blog_banner'
import Coming_soon from '../components/Coming_soon'
import Similar_news from '../components/similar_news'
import { getApi } from '@/frontend/helpers'

const page = () => {
    const comp = [Blog_banner, Similar_news, Blogs_headline, Blog_newsletter]

    
    return (
        <>
            {/* <Coming_soon/> */}
            {
                comp && comp.map((Section, index) => {
                    const props = {}
                    if (Section === Similar_news) {
                        props.sec_title = 'Blogs'
                    }
                    return (
                        <Section key={index} id={`section_${index + 1}`} {...props} />
                    )
                })
            }
        </>
    )
}

export default page