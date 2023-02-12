



import React, {useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../styles/login.css';

const Signup = () => {

    const[userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] =useState('');

    return <Helmet>
        <section>
            <Container>
                <Row>
                    <Col lg='6' className='m-auto text-center'>
                        <h3 className='fw-bold fs-4 mb-4' >Signup</h3>

                        <Form className='auth_form'>
                            <FormGroup className='form_group'>
                                <input type='email' placeholder='Enter your email'
                                value={userName} onChange={e=>setUserName(e.target.value)} />
                            </FormGroup>

                            <FormGroup className='form_group'>
                                <input type='email' placeholder='Enter your email'
                                value={email} onChange={e=>setEmail(e.target.value)} />
                            </FormGroup>

                            <FormGroup className='form_group'>
                                <input type='password' placeholder='Enter your password' 
                                value={password} onChange={e=>setPassword(e.target.value)}/>
                            </FormGroup>

                            <FormGroup className='form_group'>
                                <input type='file' 
                               
                                onChange={e=>setPassword(e.target.value)}/>
                            </FormGroup>

                            <button type='submit' className="buy_btn auth_btn">
                                Create an Account
                            </button>
                            <p>Already hava an account? { " " }
                                <Link to='/login'>
                                    Login
                                </Link>
                            </p>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default Signup;