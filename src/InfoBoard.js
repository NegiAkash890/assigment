import React from 'react'
import { Card, Col, ListGroup, Row } from 'react-bootstrap'
import CardTop from './components/CardTop'

function InfoBoard() {
    return (
        <div className='mt-4'>
            <Row>
                <Col sm={12} md={6} className='mt-2'>
                    <Card>
                        <CardTop icon='fa fa-user' heading="New User" text="see all" />
                        <Card.Body className='d-flex align-items-center bg bg-light'>
                            <Card.Img variant="left" src="https://ih0.redbubble.net/image.618427277.3222/flat,50x50,075,f.u1.jpg" />
                            <Card.Text className="ml-3">
                                Hubx
                       <Card.Subtitle className="mb-2 text-muted">Active 5min</Card.Subtitle>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} className='mt-2'>
                    <Card>
                        <CardTop icon='fa fa-user' heading="Blogs" text="New" />
                        <ListGroup variant="flush text-dark">
                            <ListGroup.Item>Blender Learning.</ListGroup.Item>
                            <ListGroup.Item>12 Steps to create live class.</ListGroup.Item>

                        </ListGroup>

                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} className='mt-2'>
                    <Card>
                        <CardTop icon='fa fa-cogs' heading="Event Log" text="see all" />
                        <Card.Body className='d-flex align-items-center bg-light'>
                            <i className='fa fa-key'></i>
                            <Card.Text className="ml-3">
                                Hubx
                       <Card.Subtitle className="mb-2 text-success">Logged In</Card.Subtitle>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card sm={12} md={6}  className="bg-dark text-white mt-3 mb-3">
                        <Card.Img src="https://wallup.net/wp-content/uploads/2016/05/26/274872-digital_art-dark-Tile-cube.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Trial Period</Card.Title>
                            <Card.Text>
                               Events Soon !
                            </Card.Text>
                            <button className="btn btn-primary">Start Trial</button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default InfoBoard
