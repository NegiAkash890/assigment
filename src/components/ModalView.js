import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'

function ModalView({ visible ,changeVisibility}) {
    const [close,setClose] = useState(visible) ;

    return (
        <div>
            <Modal show={visible} >
                <ModalHeader className='text-center'>Mutual Fund Return Calculator</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={()=>changeVisibility(false)}>Close</Button>{' '}
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalView
