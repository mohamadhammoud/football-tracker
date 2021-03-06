import { Col, Row } from 'antd'
import soccerImage from '../../assets/updated-standings.jpg';
import React from 'react'

const ViewHeader = () => {
    return (
        <Row className="header background-color-blue map-shadow" style={{ color: "white" }}>
            <Col xs={{ offset: 2, span: 22 }} className="font-size-20">
                {/* <img
                    height={36}
                    width={36}
                    style={{ borderRadius: 50 }}
                    src={soccerImage}
                    alt=""
                /> */}
                &nbsp;
                &nbsp;
                Football Standings Tracker
            </Col>
        </Row>
    )
}

export default ViewHeader
