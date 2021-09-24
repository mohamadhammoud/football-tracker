import { DatabaseFilled, DownCircleFilled, SaveFilled, TrophyFilled, UpCircleFilled, VideoCameraFilled } from '@ant-design/icons';
import { Carousel } from 'antd';
import React from 'react'

const contentStyle = {
    height: '100px',
    color: 'white',
    lineHeight: '80px',
    textAlign: 'center',
    background: '#364d79',
    borderRadius: 10
} as any;

const CustomCarousel = () => {
    return (
        <Carousel style={contentStyle} className="carousel-shadow" autoplay>
            <div>
                <h3 style={{ color: "white", fontSize: 24 }}><TrophyFilled /> &nbsp; Best 10 Leagues over world! &nbsp;<TrophyFilled /> </h3>
            </div>
            <div>
                <h3 style={{ color: "white", fontSize: 24 }}> <UpCircleFilled /> &nbsp; All Standings and Statistics. &nbsp; <DownCircleFilled />   </h3>
            </div>
            <div>
                <h3 style={{ color: "white", fontSize: 24 }}> <DatabaseFilled /> &nbsp; Team Information. &nbsp;<DatabaseFilled /></h3>
            </div>
            <div>
                <h3 style={{ color: "white", fontSize: 24 }}> <VideoCameraFilled /> &nbsp; Players Life. &nbsp;<SaveFilled /></h3>
            </div>
        </Carousel>
    )
}

export default CustomCarousel
