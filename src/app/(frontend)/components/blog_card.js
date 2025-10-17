import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import '../../../../public/sass/pages/cards.scss';
import { publicPath } from '@/frontend/helpers';
import b3 from '../../../../public/images/b1.png'

const Blog_card = ({ title,id, c_title, src ,sec_title}) => {
    const social = [{ icon: <i className="bi bi-heart"></i>, val: '2.2k' }, { icon: <i className="bi bi-send"></i>, val: '60' }]
    const BASE_URL = process.env.BASE_URL
    return (
        <>
            <div className="card_item">
                <div className="top_area">
                    <div className="img_wrapper">
                        {
                            src ? 
                            <Image src={publicPath(src)} alt='...' title='...' fetchPriority='low' priority={false} width={200} height={150} />
                            : ""
                        }
                    </div>
                </div>
                <div className="bottom_area">
                    <div className="title">
                        <h3>{title}</h3>
                        <p>{c_title}</p>
                    </div>
                    <div className="social">
                        {/* <div className="left">
                            {
                                social?.map((item, i) => (
                                    <div className="chip" key={i}>
                                        <span>{item.icon}</span>
                                        {item.val}
                                    </div>
                                ))
                            }
                        </div> */}
                        <div className="right">
                            <Link href={sec_title === 'Similar News'? id : `blog_detail/${id}`} className='read'>Read More <span><i className="bi bi-arrow-up-right"></i></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog_card