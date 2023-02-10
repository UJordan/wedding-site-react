// import SubHeader from '../components/SubHeader';
import { Container, Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const ContactPage = () => {
    const handleSubmit = ( values, { resetForm }) => {
        resetForm();
    }

    return (

        <div>
            {/* <Container>
                <SubHeader current='Contact' />
            </Container> */}
            <div className='info align-items-center text-center'>
                    <h3 className='pt-5 mb-5'>We look forward to celebrating with you</h3>
                    <p className='pb-5'>Please feel free to contact us with any questions you mave about the ceremony</p>
                </div>
            <div className='mt-5 contact'>
                <h3>Get in touch!</h3>
                <hr></hr>
                <Formik 
                    initialValues ={{
                        firstName: '',
                        lastName: '',
                        phoneNum: '',
                        email: '',
                        agree: false,
                        contactType: 'By Phone',
                        message: ''
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <FormGroup row>
                            <Label htmlFor='firstName' md='2'>
                                First Name
                            </Label>
                            <Col>
                                <Field
                                    name='firstName'
                                    placeholder='First Name'
                                    className='form-control'
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='lastName' md='2'>
                                Last Name
                            </Label>
                            <Col>
                                <Field
                                    name='lastName'
                                    placeholder='Last Name'
                                    className='form-control'
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='phoneNum' md='2'>
                                Phone
                            </Label>
                            <Col>
                                <Field
                                    name='phoneNum'
                                    placeholder='Phone'
                                    className='form-control'
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='email' md='2'>
                                Email
                            </Label>
                            <Col>
                                <Field
                                    name='email'
                                    placeholder='Email'
                                    type='email'
                                    className='form-control'
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='feedback' md='2'>
                                Message
                            </Label>
                            <Col>
                                <Field
                                    name='message'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type='submit' color='secondary'>
                                    Submit
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default ContactPage;