"use client";

import FormCom from "@/app/admin/components/Form";
import NavTop from "@/app/admin/components/navTop";
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { formatDate, getApi, handleImageChange, handleInputChange, postApi, postFormApi } from "@/frontend/helpers";
import React from 'react';
import Editor from 'react-simple-wysiwyg';
import { redirect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import ViewData from "@/app/admin/components/viewData";

const Page = ({ params }) => {
    const [data, setData] = useState(null);
    const [id, setId] = useState(0);

    const getData = async () => {
        params = await params;
        let id = params.id;
        setId(id)

        let res = await getApi(`/api/blog/categories/${id}/get`);
        if(res.status) {
            setData(res.data)
        }
    }
    
    useEffect(() => {
        getData();
    }, [])

  return (
    <>
        <NavTop title="Blog" backUrl="/admin/blogs/categories" editUrl={`/admin/blogs/${id}/edit`}></NavTop>
        {
            data ?
            (<div className='right_inner top_spacing'>
                <div className='left_side'>
                    <ViewData title="Contact">
                        <div className='card-body'>
                            <div className='row_data'>
                                <div className='left'>
                                    <div className='txt'>Id</div>
                                </div>
                                <div className='right'>
                                    <div className='txt'>{ data._id }</div>
                                </div>
                            </div>
                            <div className='row_data'>
                                <div className='left'>
                                    <div className='txt'>Title</div>
                                </div>
                                <div className='right'>
                                    <div className='txt'>{ data.title }</div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='card-footer'>
                            <div className='sub_heading'>Description</div>
                            <div className='desc' dangerouslySetInnerHTML={{ "__html": data.description }}></div>
                        </div> */}
                    </ViewData>
                </div>
                <div className='right_side'>
                    <ViewData>
                        <div className="card-body">
                            <div className='row_data'>
                                <div className='left'>
                                    <div className='txt'>Created At</div>
                                </div>
                                <div className='right'>
                                    <div className='txt'>{ formatDate(data.created_at) }</div>
                                </div>
                            </div>
                            <div className='row_data'>
                                <div className='left'>
                                    <div className='txt'>Updated At</div>
                                </div>
                                <div className='right'>
                                    <div className='txt'>{ formatDate(data.updated_at) }</div>
                                </div>
                            </div>
                            <div className='row_data'>
                                <div className='left'>
                                    <div className='txt'>Status</div>
                                </div>
                                <div className='right'>
                                    <div className='txt'>{ data.status ? "Published" : "Unpublished" }</div>
                                </div>
                            </div>
                        </div>
                    </ViewData>
                </div>
            </div>) : ""
        }
    </>
    )
}

export default Page;