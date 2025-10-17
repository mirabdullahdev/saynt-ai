import React, { useState } from 'react'
import '../../../../public/sass/ai_scss/ai.scss'
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import Image from 'next/image'
import newsletterBg from '../../../../public/images/ai_newsletter.png'
import { postApi } from '@/frontend/helpers'
import { toast } from 'react-toastify'

const Ai_newsletter = () => {
    const [email, setEmail] = useState("");
    const [formSubmit, setFormSubmit] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setFormSubmit(true);
        let formData = {};
        formData.email = email;

        let resp = await postApi(`/api/send-mail?type=aiAcademy`, formData);
        if(resp.status)
        {
            toast.success("Thanks For Contacting!")
            setEmail("");
        }
        else
        {
            toast.error("Something's Went Wrong!!")
        }
        setFormSubmit(false);
    }

    return (
        <section className='ai_newsletter_section animate_up'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <div className='form_area'>
                                <Form onSubmit={handleFormSubmit}>
                                    <div className='form-group'>
                                        <Form.Control onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter your email here" />
                                    </div>
                                    <div className='button_area'>
                                        <Button disabled={formSubmit} type='submit'>
                                            {
                                                formSubmit ?
                                                <Spinner animation="border" size="sm" /> :
                                                <i className="bi bi-arrow-right"></i>
                                            }
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                            <div className='image_area'>
                                <Image src={newsletterBg} alt="..." title="..." priority ></Image>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Ai_newsletter
