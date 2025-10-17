"use client";
import React, { useEffect, useState } from 'react';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import '../../../../public/admin/sass/pages/auth.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { checkLogin, handleInputChange, postApi } from '@/frontend/helpers';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';

const isLogin = async () => {
    if(await checkLogin())
    {
        redirect("/admin/dashboard");
    } 
}

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [showPass, setShowPass] = useState(false);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        let res = await postApi("/api/auth/login", loginData);
        if(res.status) {
            let admin = res.data;
            Cookies.set('au_to', admin.token);
            redirect("/admin/dashboard")
        } else {
            toast.error(res.message || "Something's went wrong!");
        }
    }

    useEffect(() => {
        isLogin();
    }, [])

    return (
        <div className='auth_page'>
            <Card>
                <div className='card-header'>
                    <div className='heading'>Admin</div>
                </div>
                <div className='card-body'>
                    <h5>Sign In</h5>
                    <div className='desc'>Please sign-in to your account and start the adventure</div>
                    <Form onSubmit={handleLoginSubmit}>
                        <Form.Group className='form-group'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Your Email"
                                name='email'
                                onChange={(e) => handleInputChange(e, loginData, setLoginData)}
                            />
                        </Form.Group>
                        <Form.Group className='form-group'>
                            {/* <div className='row2'>
                                <Form.Label>Password</Form.Label>
                                <Link href="./forgotPassword" className='forgot'>Forgot Password?</Link>
                            </div> */}
                            <InputGroup>
                                <Form.Control
                                    required
                                    type={showPass ? "text" : "password"}
                                    placeholder="Enter Your Password"
                                    name='password'
                                    onChange={(e) => handleInputChange(e, loginData, setLoginData)}
                                />
                                <InputGroup.Text onClick={() => setShowPass(!showPass)} id="inputGroupPrepend">
                                    <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} />
                                </InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        {/* <Form.Check label="Remember Me" /> */}
                        <div className='btn_area'>
                            <Button type="submit">Sign in</Button>
                        </div>
                    </Form>
                </div>
            </Card>
        </div>
    )
};

export default Login