import React from 'react'
import { Card } from 'react-bootstrap'

function CardView({ pic, title, data }) {
    return (
        <div>
            <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" className={pic} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                       {data}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardView
