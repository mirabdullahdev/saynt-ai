'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import logo from '../../../../public/images/clear_logo.svg'
import '../../../../public/sass/carees_scss/careers.scss'
import Coming_soon from '../components/Coming_soon'
import { handleImageChange, handleInputChange, postApi } from '@/frontend/helpers'
import { toast } from 'react-toastify'

const page = () => {
    const [formData, setFormData] = useState({})
    const [mailSent, setMailSent] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [validForm, setValidForm] = useState(true);
    console.log(validForm)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setFormSubmitted(true);

        if(!('first_name' in formData) || !formData.first_name || !('employment_status' in formData) || !formData.employment_status || !('filePath' in formData) || !formData.filePath) {
            setValidForm(false)
            setFormSubmitted(false);
            return false;
        }
        setValidForm(true)
        
        let resp = await postApi(`/api/send-mail?type=career`, formData);
        if(resp.status)
        {
            toast.success("Thanks For Applying!")
            setMailSent(true);
            setTimeout(() => {
                setTimeout(() => {
                    setMailSent(false)
                    setFormSubmitted(false);
                    window.location.reload();
                }, 500)
            }, 2000)
        }
        else
        {
            setMailSent(false)
            setFormSubmitted(false);
            toast.error("Something's Went Wrong!!")
        }
    }

    return (
        <>
        {/* <Coming_soon/> */}
            <section className='career_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <Row className='align-items-center'>
                                    <Col xxl={9} xl={9} lg={9} md={12} sm={12} xs={12}>
                                        <div className='left_area'>
                                            <h3>Welcome jobseeker</h3>
                                            <p>Please enter your details</p>
                                            <Form onSubmit={handleFormSubmit}>
                                                <Row>
                                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                                        <div className='form-group'>
                                                            <Form.Label>First name</Form.Label>
                                                            <Form.Control onChange={(e) => handleInputChange(e, formData, setFormData)} name='first_name' type="text" placeholder="Enter first name" />
                                                        </div>
                                                        <div className='form-group'>
                                                            <Form.Label>Last name</Form.Label>
                                                            <Form.Control onChange={(e) => handleInputChange(e, formData, setFormData)} name='last_name' type="text" placeholder="Enter last name" />
                                                        </div>
                                                        <div className='form-group'>
                                                            <Form.Label>Country of Origin</Form.Label>
                                                            <Form.Control onChange={(e) => handleInputChange(e, formData, setFormData)} name='country_origin' type="text" placeholder="Enter country" />
                                                        </div>
                                                        <div className='form-group'>
                                                            <Form.Label>State</Form.Label>
                                                            <Form.Control onChange={(e) => handleInputChange(e, formData, setFormData)} name='state' type="text" placeholder="Enter State" />
                                                        </div>
                                                        <div className='form-group'>
                                                            <div className='text'>Are you WIlling to relocate?</div>
                                                            <Form.Check 
                                                                type="radio" 
                                                                id="yes" 
                                                                name="radio1"
                                                                onChange={(e) => handleInputChange(e, formData, setFormData, "relocate", "Yes")} 
                                                                label="Yes"
                                                            />
                                                            <Form.Check 
                                                                type="radio" 
                                                                id="no" 
                                                                name="radio1"
                                                                onChange={(e) => handleInputChange(e, formData, setFormData, "relocate", "No")} 
                                                                label="No"
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                                        <div className='form-group'>
                                                            <Form.Label>Specific Employment Status</Form.Label>
                                                            <Form.Control onChange={(e) => handleInputChange(e, formData, setFormData)} name='employment_status' type="text" placeholder="--- ---" />
                                                        </div>
                                                        <div className='form-group file_area'>
                                                            <Form.Label>CV</Form.Label>
                                                            <div className='btn-primary btn-green'>Upload</div>
                                                            <div className='border_input'>.</div>
                                                            <Form.Control onChange={(e) => handleImageChange(e, formData, setFormData)} name='cv' type="file" placeholder="--- ---" className='file_upload'/>
                                                        </div>
                                                        <div className='form-group'>
                                                            <Form.Label>Comments</Form.Label>
                                                            <Form.Control onChange={(e) => handleInputChange(e, formData, setFormData)} name='comments' as="textarea" rows={6} placeholder='Enter your comment'/>
                                                        </div>
                                                    </Col>
                                                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                                        {
                                                            !validForm && <span className='text-danger'>Please Provide Required Inputs</span>
                                                        }
                                                        <div className='button_area'>
                                                            {/* <Button type="submit" className='btn-primary btn-green'>Apply</Button> */}
                                                            {
                                                                formSubmitted ? (
                                                                    <Button className='btn btn-primary btn-green' disabled>
                                                                        <Spinner size='sm' animation="border" role="status">
                                                                            <span className="visually-hidden">Loading...</span>
                                                                        </Spinner>
                                                                    </Button>
                                                                ) : (
                                                                    <Button className='btn btn-primary btn-green' type='submit'>
                                                                        Apply
                                                                    </Button>
                                                                )
                                                            }
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </div>
                                    </Col>
                                    <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={12}>
                                        <div className='right_area'>
                                            <div className='logo_area'>
                                                <Image 
                                                    src={logo}
                                                    alt='...'
                                                    title='...'
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default page