
import { DatabaseFilled, DownCircleFilled, SaveFilled, TrophyFilled, UpCircleFilled, VideoCameraFilled } from '@ant-design/icons';
import { Carousel } from 'antd';
import React from 'react'
import g1 from '../../assets/ViewCountryLeaguesAssets/g1.jpg'
import g2 from '../../assets/ViewCountryLeaguesAssets/g2.jpg'
import g4 from '../../assets/ViewCountryLeaguesAssets/g4.jpg'
import g6 from '../../assets/ViewCountryLeaguesAssets/g6.jpg'
import g7 from '../../assets/ViewCountryLeaguesAssets/g7.jpg'
import g8 from '../../assets/ViewCountryLeaguesAssets/g8.jpg'
import g9 from '../../assets/ViewCountryLeaguesAssets/g9.jpg'
import g10 from '../../assets/ViewCountryLeaguesAssets/g10.jpg'

const contentStyle = {
    height: '500px',
    color: 'white',
    // lineHeight: '700px',
    textAlign: 'center',
    background: '#364d79',
    borderRadius: 10
} as any;

const CountriesLeagueCarousel = () => {
    return (
        <Carousel style={contentStyle} className="carousel-shadow center" autoplay>
            <div>
                <img height={"500px"} width={"100%"} style={{ borderRadius: 10 }} src={g1} alt="" />
            </div>
            <div>
                <img height={"500px"} width={"100%"} style={{ borderRadius: 10 }} src={g2} alt="" />
            </div>

            <div>
                <img height={"500px"} width={"100%"} style={{ borderRadius: 10 }} src={g4} alt="" />
            </div>

            <div>
                <img height={"500px"} width={"100%"} style={{ borderRadius: 10 }} src={g6} alt="" />
            </div>
            <div>
                <img height={"500px"} width={"100%"} style={{ borderRadius: 10 }} src={g7} alt="" />
            </div>
            <div>
                <img height={"500px"} width={"100%"} style={{ borderRadius: 10 }} src={g8} alt="" />
            </div>
            <div>
                <img height={"500px"} width={"100%"} style={{ borderRadius: 10 }} src={g9} alt="" />
            </div>
            <div>
                <img height={"500px"} width={"100%"} style={{ borderRadius: 10 }} src={g10} alt="" />
            </div>
        </Carousel>
    )
}
export default CountriesLeagueCarousel
