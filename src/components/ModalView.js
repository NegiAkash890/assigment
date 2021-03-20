import React, { useState } from 'react'
import { Button, Form, Modal, ModalBody, ModalFooter } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'

function ModalView({ visible, changeVisibility }) {

   const [invite,setInvite] = useState(0)
   const [duration,setDuration] =useState(0)
    return (
        <div>
            <Modal show={visible} >
                <ModalHeader className='text-center'>Calculator</ModalHeader>
                <ModalBody>
                    <Form>
                        <Form.Group>
                            <div className='d-flex justify-content-between'>
                            <Form.Label>Number of Invites</Form.Label>
                            <Form.Label className="border-bottom">{invite}</Form.Label>
                            </div>
                            <Form.Control type="range" onChange={(e)=>{setInvite(e.target.value)}} value={invite} step='10'/>
                        </Form.Group>
                        <Form.Group>
                            <div className='d-flex justify-content-between'>
                            <Form.Label>Event Duration</Form.Label>
                            <Form.Label className="border-bottom">{duration} min</Form.Label>
                            </div>
                            <Form.Control type="range" onChange={(e)=>{setDuration(e.target.value)}} value={duration} max='120' step='30'/>
                        </Form.Group>

                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="btn btn-danger" disabled={(!invite)&&(!duration)}>Book Slot</Button>{' '}
                    <Button className='btn btn-danger' onClick={() => changeVisibility(false)}>Close</Button>{' '}
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalView
