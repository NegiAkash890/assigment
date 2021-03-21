import React from 'react'
import { Card } from 'react-bootstrap'
import './CardView.css'

function CardView({ pic, title, data }) {
    return (
        <div>
            <Card style={{ minwidth: '10rem' , height:'10rem'}} className='mb-1'>
                <Card.Body className='d-flex flex-column justify-content-between align-items-center mr-1'>
                    <i className={pic+' text-center'} />
                    <Card.Text className='card_title text-center'>{title}</Card.Text>
                    <Card.Subtitle className="mb-1 font-weight-bold">{data}</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardView
