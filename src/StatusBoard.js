import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Chart from 'chart.js'
import CardView from './components/CardView'

function StatusBoard() {
    useEffect(() => {
        var ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: "New Users",
                    data: [10, 5, 20, 25, 25, 80, 60, 80, 70, 70, 90, 90],
                    fill: false,
                    borderColor: "#4285F4"
                }]
            },

        });

    }, [])
    return (
        <Row>
            <Col sm={8} >
                <canvas id='myChart'></canvas>
            </Col>
            <Col sm={4}>
                <Row>
                    <Col sm={4}><CardView pic="fa fa-lg fa-user" title="All users" data="1" /></Col>
                    <Col sm={4}><CardView pic="fa fa-lg fa-retweet" title="Conversions" data="0%" /></Col>
                    <Col sm={4}><CardView pic="fa fa-lg fa-credit-card" title="Sales" data="0" /></Col>
                </Row>
                <Row className='mt-1'>
                    <Col sm={4}><CardView pic="fa fa-lg fa-clock-o" title="Avg time" data="0 min" /></Col>
                    <Col sm={4}><CardView pic="fa fa-lg fa-book" title="Courses" data="0" /></Col>
                    <Col sm={4}><CardView pic="fa fa-lg fa-bars" title="Course Categories" data="0" /></Col>
                </Row>

            </Col>

        </Row>
    )
}

export default StatusBoard
