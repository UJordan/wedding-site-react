import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FormGroup, Label } from 'reactstrap';


const RsvpModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Button className='text-white border-white' outline onClick={() => setModalOpen(true)}>
                RSVP NOW
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader className='text-white' toggle={() => setModalOpen(false)}>
                    RSVP NOW!
                </ModalHeader>
                <ModalBody>
                    <div className='container-fluid'>
                        <form id='modal-form'>
                            <div className='form-row'>
                                <div className='msg'></div>
                                <div className='form-group col-12'>
                                    <label className='sr-only' for='firstName'>First Name</label>
                                    <input className='form-control form-control-sm' id='firstName' placeholder='First Name'></input>
                                </div>
                                <div className='form-group col-12'>
                                    <label className='sr-only' for='lastName'>Last Name</label>
                                    <input className='form-control form-control-sm' id='lastName' placeholder='Last Name'></input>
                                </div>
                            </div>
                            <div className='form-row'>
                                <Button type='submit' value='submit' className='btn btn-primary btn-sm'>Submit</Button>
                            </div>
                        </form>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
};

export default RsvpModal;