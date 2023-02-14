



import React, {useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';

import { auth } from '../firebase.config';
import { storage } from '../firebase.config';
import { db } from '../firebase.config';

import { toast } from 'react-toastify';

import '../styles/login.css';

const Signup = () => {

    const[username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] =useState(null);
    const [loading, setLoading] = useState(false);

    const signup = async(e)=> {
        e.preventDefault()
        setLoading(true)

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth, 
                email, 
                password
                );

                const user = userCredential.user;

                const storageRef = ref(storage, `images/$ {username}`);
                const uploadTask = uploadBytesResumable(storageRef, file);

                uploadTask.on((error)=> {
                    toast.error(error.message);
                }, 

                ()=> {
                    getDownloadURL(uploadTask.snapshot.ref)
                    .then(async(downloadURL) => {

                        // update user profile
                            await updateProfile(user, {
                                displayName: username,
                                photoURL: downloadURL,
                            });
                        
                        // store user data in firestore database

                            await setDoc(doc(db, 'users', user.uid),{
                                uid: user.uid,
                                displayName: username,
                                email,
                                photoURL: downloadURL,
                            });


                        });
                });

                setLoading(false)
                toast.success('Account created successfully')
                console.log(user);
        }catch(error) {
            toast.error('something went wrong');
        }
    }



    return <Helmet title = 'Signup'>
            <CommonSection title='Siginup'/>
        <section>
            <Container>
                <Row>
                    <Col lg='6' className='m-auto text-center'>
                        <h3 className='fw-bold fs-4 mb-4' >Signup</h3>

                        <Form className='auth_form' onSubmit={signup}>
                            <FormGroup className='form_group'>
                                <input type='input' placeholder='Enter your name'
                                value={username} onChange={e=>setUserName(e.target.value)} />
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
                               
                                onChange={e=>setFile(e.target.files[0])}/>
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