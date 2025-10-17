"use client";

import FormCom from "@/app/admin/components/Form";
import NavTop from "@/app/admin/components/navTop";
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { getApi, handleImageChange, handleInputChange, postApi, postFormApi, publicPath } from "@/frontend/helpers";
import React from 'react';
import Editor from 'react-simple-wysiwyg';
import { redirect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), {
    ssr: false,
});

const Page = ({ params }) => {
    const [data, setData] = useState(null);
    const [categories, setCategories] = useState([]);
    
    const handleFormSubmit = async (e) => {
        params = await params;
        let id = params.id;
        e.preventDefault();

        // const formData = new FormData();
        
        // for(let key in data) {
        //     formData.append(key, data[key])
        // }
        
        let res = await postApi(`/api/blog/${id}/edit`, data);
        if(res.status) {
            redirect("/admin/blogs");
        } else {
            console.log(res)
        }
    }
    
    const getCategories = async () => {
        let res = await getApi("/api/blog/categories/get-all?status=publish");
        if(res.status) {
            let list = [];
            res.data.data.forEach(item => {
                list.push({
                    value: item._id,
                    label: item.title,
                })
            });
            setCategories(list)
        }
    }

    const getData = async () => {
        params = await params;
        let id = params.id;

        let res = await getApi(`/api/blog/${id}/get`);
        if(res.status) {
            setData(res.data)
        }
    }
    
    useEffect(() => {
        getData();
        getCategories();
    }, [])

  return (
        <>
            <NavTop title="Blog"  backUrl="/admin/blogs"/>

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
                            <Select
                                className="select_main"
                                classNamePrefix="select"
                                placeholder="Select the value"
                                isClearable={false}
                                isMulti={false}
                                name="category"
                                onChange={(e) => handleInputChange(e, data, setData, "category", e.value)}
                                options={categories}
                                value={categories.find((option) => option.value === data.category) || null}
                            />
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Form.Group className='form-group mt-4'>
                                <Form.Label>Description</Form.Label>
                                <Editor 
                                    value={data.description}
                                    name="description"
                                    onChange={(e) => handleInputChange(e, data, setData)}
                                />
                                </Form.Group>
                            </Col>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                <Form.Group className='form-group'>
                                <Form.Label>Image</Form.Label>
                                <Form.Label htmlFor="file-upload" className='upload'>Upload Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    id="file-upload"
                                    placeholder="Upload Image"
                                    name="image"
                                    onChange={(e) => handleImageChange(e, data, setData)}
                                />
                                {/* after upload --------- */}
                                {
                                    data.image ? (
                                        <div className='upload_img_area'>
                                            <div className='img_area'>
                                            <span className='cross_icon'>
                                                <FontAwesomeIcon icon={faTimes} onClick={() => setData({...data, image: null})} />
                                            </span>
                                            <img
                                                src={data.filePath ? publicPath(data.filePath) : publicPath(data.image)}
                                                alt='...'
                                                priority="low"
                                                width={100}
                                                height={100}
                                            />
                                            </div>
                                        </div>
                                    ) : ""
                                }
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