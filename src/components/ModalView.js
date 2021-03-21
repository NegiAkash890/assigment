import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, ModalBody, ModalFooter } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'
import Chart from 'chart.js'

function ModalView({ visible, changeVisibility }) {

    const [invite, setInvite] = useState(0)
    const [duration, setDuration] = useState(0)
  
    useEffect(() => {
        var ctx = document.getElementById('priceChart');
        const curr_amount = invite*duration ;
        const total = 100*120*1 ;
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Current Amount', 'Available Amount'],
                datasets: [{

                    data: [curr_amount,total-curr_amount],
                    backgroundColor: [
                        'rgba(100,255,100,0.7)',
                        'rgba(255,100,100,0.7)',

                    ]
                }]
            },
            options: {
                "cutoutPercentage": "50",
                animation: {
                    duration: 0 // general animation time
                },
                hover: {
                    animationDuration: 0 
                },
            }

        });


    }, [invite, duration])
    return (
        <div>
            <Modal show={visible} >
                <ModalHeader className='text-center'><i className='fa fa-calculator'> Calculator</i></ModalHeader>
                <ModalBody>
                    <canvas id='priceChart' disabled></canvas>
                    <Form>
                        <Form.Group>
                            <div className='d-flex justify-content-between'>
                                <Form.Label>Number of Invites</Form.Label>
                                <Form.Label className="border-bottom">{invite}</Form.Label>
                            </div>
                            <Form.Control type="range" onChange={(e) => { setInvite(e.target.value) }} value={invite} step='10' />
                        </Form.Group>
                        <Form.Group>
                            <div className='d-flex justify-content-between'>
                                <Form.Label>Event Duration</Form.Label>
                                <Form.Label className="border-bottom">{duration} min</Form.Label>
                            </div>
                            <Form.Control type="range" onChange={(e) => { setDuration(e.target.value) }} value={duration} max='120' step='30' />
                        </Form.Group>

                    </Form>
                    <p>Price : Rs.{invite*duration}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="btn btn-danger" disabled={(!invite) && (!duration)}>Book Slot</Button>{' '}
                    <Button className='btn btn-danger' onClick={() => changeVisibility(false)}>Close</Button>{' '}
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalView
