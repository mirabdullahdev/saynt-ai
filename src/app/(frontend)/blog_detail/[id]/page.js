'use client'
import React, { useEffect, useState } from 'react'
import Detail_banner from '../../components/detail_banner'
import Detail_newsletter from '../../components/Detail_newsletter'
import Similar_news from '../../components/similar_news'
import Detail_info from '../../components/Detail_info'
import { useParams } from 'next/navigation'
import { getApi } from '@/frontend/helpers'

const page = () => {
    const comp = [Detail_banner, Detail_info, Similar_news, Detail_newsletter]
    const [blogDetail, setBlogDetail] = useState({})
    const {id} = useParams()
    async function getBlogDetail() {
        let res = await getApi(`/api/blog/${id}/get`)
        setBlogDetail(res?.data)
    }
    useEffect(()=>{
        getBlogDetail()
    },[])
    return (
        <>
            {
                comp && comp.map((Section, index) => {
                    const props = {}
                    if (Section === Similar_news) {
                        props.sec_title = 'Similar News'
                        props.btn_text = ' View All News'
                    }
                    return(
                        <Section key={index} id={`section_${index + 1}`} {...props} {...blogDetail}/>
                    )
                }
                )
            }
        </>
    )
}

export default page