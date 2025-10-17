'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import '../../../../public/sass/calling_agent/calling_agent.scss'
import { toast } from 'react-toastify'
import { postApi } from '@/frontend/helpers'



const Calling_outreach = () => {
    const [email, setEmail] = useState('');
    const [formSubmit, setFormSubmit] = useState(false);

    const showToast = async (e) => {
        e.preventDefault();
        if (!email.trim()) {
            toast.error("Please enter your email before proceeding.");
            return;
        }

        setFormSubmit(true);
        let formData = {};
        formData.email = email;

        let resp = await postApi(`/api/send-mail?type=aiAgentDemo`, formData);
        if (resp.status) {
            toast.success("Thank you! We will reach out to you shortly.");
            setEmail("");
            setFormSubmit(false);
        }
        else {
            toast.error("Something's Went Wrong!!")
            setFormSubmit(false);
        }
    }
    return (
        <>
            <section className='calling_outreach_section animate_up' >
                <div className="contact_gradient"></div>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <h3>Ready to Transform Your Outreach?</h3>
                                <Form>
                                    <div className='form-group'>
                                        <Form.Control
                                            type="email"
                                            placeholder='Enter your email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className='button_area'>
                                        <Button onClick={showToast} className='btn-primary btn-dark' disabled={formSubmit}>
                                            {
                                                formSubmit ?
                                                    <Spinner animation="border" size="sm" /> :
                                                    "Request an AI Agent Demo"
                                            }
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Calling_outreach
