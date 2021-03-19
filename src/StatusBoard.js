import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CardView from './components/CardView'

function StatusBoard() {
    return (
        <div>
            <Row>
            <Col><CardView pic="fa fa-home" title="Home" data="1"/></Col>
            <Col><CardView pic="fa fa-home" title="Home" data="1"/></Col>
            <Col><CardView pic="fa fa-home" title="Home" data="1"/></Col>
            </Row>
            <Row>
            <Col><CardView pic="fa fa-home" title="Home" data="1"/></Col>
            <Col><CardView pic="fa fa-home" title="Home" data="1"/></Col>
            <Col><CardView pic="fa fa-home" title="Home" data="1"/></Col>
            </Row>
        </div>
    )
}

export default StatusBoard
