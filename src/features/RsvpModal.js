import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FormGroup, Label } from 'reactstrap';
import {Formik, Field, Form} from 'formik';


const RsvpModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Button color='secondary' onClick={() => setModalOpen(true)}>
                RSVP NOW
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader className='text-white' toggle={() => setModalOpen(false)}>
                    <h3 className='modal-title'>RSVP NOW!</h3>
                </ModalHeader>
                <ModalBody>
                    <Formik>
                        <Form>
                            <FormGroup>
                                <Label htmlFor='firstName'>
                                    First Name
                                </Label>
                                <Field 
                                    name='firstName'
                                    placeholder='First Name'
                                    className='form-control'
                                >
                                </Field>
                                </FormGroup>
                            <FormGroup>
                                <Label htmlFor='firstName'>
                                    Last Name
                                </Label>
                                <Field 
                                    name='lastName'
                                    placeholder='Last Name'
                                    className='form-control'
                                >
                                </Field>
                            </FormGroup>
                            <FormGroup>
                                <Button type='submit' color='primary'>
                                    Submit
                                </Button>
                            </FormGroup>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
};

export default RsvpModal;