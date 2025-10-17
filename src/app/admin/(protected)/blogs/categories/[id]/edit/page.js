"use client";

import FormCom from "@/app/admin/components/Form";
import NavTop from "@/app/admin/components/navTop";
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { getApi, handleImageChange, handleInputChange, postApi, postFormApi } from "@/frontend/helpers";
import React from 'react';
import Editor from 'react-simple-wysiwyg';
import { redirect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Page = ({ params }) => {
    const [data, setData] = useState(null);
    
    const handleFormSubmit = async (e) => {
        params = await params;
        let id = params.id;
        e.preventDefault();

        // const formData = new FormData();
        
        // for(let key in data) {
        //     formData.append(key, data[key])
        // }
        
        let res = await postApi(`/api/blog/categories/${id}/edit`, data);
        if(res.status) {
            redirect("/admin/blogs/categories");
        } else {
            console.log(res)
        }
    }

    const getData = async () => {
        params = await params;
        let id = params.id;

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
            <NavTop title="Blog"  backUrl="/admin/blogs/categories"/>

            {
                data ? (
                    <FormCom top_spacing="top_spacing" title="Blog">
                        <Form method="post" onSubmit={handleFormSubmit}>
                            <Row>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Form.Group className='form-group'>
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter Title"
                                    name="title"
                                    value={data.title}
                                    onChange={(e) => handleInputChange(e, data, setData)}
                                />
                                </Form.Group>
                            </Col>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Form.Group className='form-group'>
                                <Form.Label>Publish</Form.Label>
                                <Form.Group className='form-group'>
                                    <Form.Check 
                                        type="switch" 
                                        defaultChecked={data.status == 1} 
                                        name="status"
                                        onChange={(e) => handleInputChange(e, data, setData)
                                    } />
                                </Form.Group>
                                </Form.Group>
                            </Col>
                            <div className='btn_area'>
                                <Button type="submit" >Submit</Button>
                            </div>
                            </Row>
                        </Form>
                    </FormCom>
                ) : ""
            }

        </>
    )
}

export default Page;