import React, { useState } from 'react'
import { Button, Form, Modal, Spinner } from 'react-bootstrap'
import '../../../../public/sass/pages/modal.scss';
import { postApi } from '@/frontend/helpers';
import { toast } from 'react-toastify';

const Main_modal = ({ show, setShow, type, appointment , newsletter }) => {
    const [formData, setFormData] = useState({});
    const [mailSent, setMailSent] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({
        phonenumber: null
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        
        if(e.target.value != "")
        {
            setFormErrors({
                ...formErrors,
                [e.target.name]: null,
            });
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        // return true;
        setFormSubmitted(true);
        
        if(type != "newsletter" && (typeof formData.phonenumber == "undefined" || formData.phonenumber == ""))
        {
            setFormErrors({...formErrors, phonenumber: "Please Provide Phone Number"});
            setFormSubmitted(false);
            return false;
        }
        formData.appointment = appointment;
        
        let resp = await postApi(`/api/send-mail?type=${type}`, formData);
        if(resp.status)
        {
            toast.success("Our Expert Will Contact You Shortly!")
            setMailSent(true);
            setTimeout(() => {
                setShow(false)
                setTimeout(() => {
                    setMailSent(false)
                    setFormSubmitted(false);
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
            <Modal show={show} onHide={() => setShow(false)} backdrop="static" centered onSubmit={handleFormSubmit}>
                <Modal.Header>
                    <div className="icon" onClick={() => setShow(false)}>
                        <i className="bi bi-x-lg"></i>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <Form action=''>
                        {
                            !newsletter &&(
                                <>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control onChange={handleInputChange} type='text' placeholder='Enter Full Name' name='fullname' aria-label='fullname' />
                                    </Form.Group>
                                    <Form.Group controlId='phonenumber' className='form-group'>
                                        <Form.Label>Mobile No.</Form.Label>
                                        <Form.Control onChange={handleInputChange} type='tel' placeholder='Enter your Mobile No.' name='phonenumber' aria-label='phonenumber' autoComplete='tel' />
                                    </Form.Group>
                                </>

                            )
                        }
                        {
                            appointment ? (
                                <Form.Group controlId='email' className='form-group'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control onChange={handleInputChange} type='email' placeholder='Enter Email' name='email' aria-label='email' />
                                </Form.Group>
                            ) : ""
                        }
                        
                        <Modal.Footer>
                            {
                                formSubmitted ? (
                                    <Button className='btn btn-primary btn-green' disabled>
                                        <Spinner size='sm' animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    </Button>
                                ) : (
                                    <Button className='btn btn-primary btn-green' type='submit'>
                                        Submit
                                    </Button>
                                )
                            }
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Main_modal