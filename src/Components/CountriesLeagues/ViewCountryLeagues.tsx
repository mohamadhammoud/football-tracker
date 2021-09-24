import { Button, Carousel, Col, Divider, Input, Row, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { getAllCompetitions } from '../../Api/football-API';
import CustomCarousel from '../CustomComponents/CustomCarousel';
import TextDivider from '../CustomComponents/TextDivider';
import FootballHistory from './FootballHistory';

const ViewCountryLeagues = () => {
    const history = useHistory();
    const [competitions, setCompetitions] = useState([]);
    const [searchedCompetitions, setSearchedCompetitions] = useState([]);

    const searchToCompetition = (value: string) => {
        const filteredResult = competitions.filter((competition: any) => competition.region.toLowerCase().includes(value.toLowerCase()))
        setSearchedCompetitions(filteredResult);

    }

    useEffect(() => {
        const requestForAllCompetitions = async () => {
            const [error, data] = await getAllCompetitions();
            if (!error) {
                setCompetitions(data);
            }
        }
        requestForAllCompetitions();
    }, []);

    const columns = [
        {
            title: 'Region',
            dataIndex: 'region',
            key: 'region',
        },
        {
            title: 'League Name',
            dataIndex: 'name',
            key: 'name',
            width: 300,
            render: (value: string, record: any) => (<Button
                // type=""
                className="background-color-orange"
                onClick={() => history.push(`/standings/${record.id}`)}
                style={{ borderRadius: 30, width: 250, backgroundColor: " #364d79", color: "white" }}
            >
                {value}
            </Button>)
        },
    ] as any;

    return (
        <Row justify="center">
            <Col xs={{ span: 23 }} className="padding-10">
                <CustomCarousel />
            </Col>
            <Col className="map-shadow margin border-radius-10" md={{ span: 10 }} xs={{ span: 22 }}>

                <div
                    className="background-color-blue"
                //  style={{ backgroundColor: "#70a1ff" }}
                >
                    <div
                        style={{ color: "white" }}
                        className="padding-top-5 font-size-24"
                    >
                        Search: &nbsp;
                        <Input
                            style={{ width: 250, borderRadius: 30 }}
                            onChange={(e: any) => searchToCompetition(e.target.value)}
                        />
                    </div>
                    <Table
                        className="center background-color-blue padding-10"
                        // style={{ height: "100%" }}
                        bordered={true}
                        pagination={{ pageSize: 10 }}
                        dataSource={searchedCompetitions.length > 0 ? searchedCompetitions : competitions}
                        columns={columns}
                        scroll={{ x: 500 }}
                        rowKey={(row: any) => row.name}
                    />
                </div>
            </Col>
            <Col className="map-shadow margin border-radius-10" style={{ backgroundColor: "white" }} md={{ span: 12 }} xs={{ span: 22 }}>
                <FootballHistory />
            </Col>
        </Row>
    )
}

export default ViewCountryLeagues


