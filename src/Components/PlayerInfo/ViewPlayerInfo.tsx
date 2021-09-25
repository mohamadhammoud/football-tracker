import { Col, Row, Table, Tabs } from 'antd';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { getPlayerById } from '../../Api/football-API';
import GobackButton from '../CustomComponents/GobackButton';

const { TabPane } = Tabs;

const ViewPlayerInfo = () => {
    const { playerId } = useParams() as any;
    const [playerInfo, setPlayerInfo] = useState<any>();

    useEffect(() => {
        const callPlayerById = async (id: string) => {
            const [error, data] = await getPlayerById(id);
            if (!error) {
                setPlayerInfo(data[0]);
            }
        }
        callPlayerById(playerId);
    }, []);

    const clubColumns = [
        {
            title: 'Club Name',
            dataIndex: 'name',
            key: 'name',
            width: 200,
        },
        {
            title: 'League',
            dataIndex: 'league',
            key: 'league',
            width: 150,
        },
        {
            title: 'Season',
            dataIndex: 'season',
            key: 'season',
        },
        {
            title: 'Appearances',
            dataIndex: 'appearances',
            key: 'appearances',
        },
        {
            title: 'Goals',
            dataIndex: 'goals',
            key: 'goals',
        },
        {
            title: 'Yellow Cards',
            dataIndex: 'yellowcards',
            key: 'yellowcards',
            width: 150,
            render: (value: string) => (
                <span style={{ color: "#ffa502" }}>
                    {value}
                </span>
            )
        },
        {
            title: 'Red Cards',
            dataIndex: 'redcards',
            key: 'redcards',
            width: 150,
            render: (value: string) => (
                <span style={{ color: "red" }}>
                    {value}
                </span>
            )
        }
    ] as any;


    const transferColumns = [
        {
            title: 'From',
            dataIndex: 'from',
            key: 'from',
            width: 200,
        },
        {
            title: 'To',
            dataIndex: 'to',
            key: 'to',
            width: 150,
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            width: 150,
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            width: 150,
        },
    ] as any;






    return (
        <>
            {
                playerInfo && (
                    <>
                        <div className="player map-shadow margin border-radius-10">
                            <Row justify="center" className="">
                                <Col>
                                    <span className="font-size-24" style={{ color: "white" }}> {playerInfo.firstname}'s Life and Career. </span>
                                </Col>
                            </Row>
                        </div>
                        <div className="map-shadow margin border-radius-10">
                            <div className="padding-20">
                                <Tabs defaultActiveKey="1" >
                                    <TabPane tab="First Name" key="1">
                                        {playerInfo.firstname ? playerInfo.firstname : ""}
                                    </TabPane>
                                    <TabPane tab="Last Name" key="2">
                                        {playerInfo.lastname ? playerInfo.lastname : ""}
                                    </TabPane>
                                    <TabPane tab="Common Name" key="3">
                                        {playerInfo.common_name ? playerInfo.common_name : ""}
                                    </TabPane>
                                    <TabPane tab="Nationality" key="4">
                                        {playerInfo.nationality ? playerInfo.nationality : ""}
                                    </TabPane>
                                    <TabPane tab="Birth Date" key="5">
                                        {playerInfo.birthdate ? playerInfo.birthdate : ""}
                                    </TabPane>
                                    <TabPane tab="Birth Country" key="6">
                                        {playerInfo.birthcountry ? playerInfo.birthcountry : ""}
                                    </TabPane>
                                    <TabPane tab="Birth Place" key="7">
                                        {playerInfo.birthplace ? playerInfo.birthplace : ""}
                                    </TabPane>
                                    <TabPane tab="Age" key="8">
                                        {playerInfo.age ? playerInfo.age : ""}
                                    </TabPane>
                                    <TabPane tab="Height" key="9">
                                        {playerInfo.height ? playerInfo.height : ""}
                                    </TabPane>
                                    <TabPane tab="Position" key="10">
                                        {playerInfo.position ? playerInfo.position : ""}
                                    </TabPane>
                                </Tabs>

                            </div>
                        </div>
                        <div className="map-shadow margin border-radius-10 ">
                            <div className="padding-20">
                                <span className="font-size-24"> {playerInfo.firstname} </span> Statistics :
                                <Tabs defaultActiveKey="1" >
                                    <TabPane tab="History with clubs" key="1">
                                        <Table
                                            className="center padding-10 background-color-blue"
                                            bordered={true}
                                            pagination={{ pageSize: 6 }}
                                            dataSource={playerInfo.player_statistics.club ? playerInfo.player_statistics.club : []}
                                            columns={clubColumns}
                                            scroll={{ x: 500 }}
                                            rowKey={(row: any) => row.name}
                                        />
                                    </TabPane>
                                    <TabPane tab="Cups" key="2">
                                        <Table
                                            className="center padding-10 background-color-blue"
                                            bordered={true}
                                            pagination={{ pageSize: 6 }}
                                            dataSource={playerInfo.player_statistics.cups ? playerInfo.player_statistics.cups : []}
                                            columns={clubColumns}
                                            scroll={{ x: 500 }}
                                            rowKey={(row: any) => row.name}
                                        />
                                    </TabPane>
                                    <TabPane tab="National Team" key="3">
                                        <Table
                                            className="center padding-10 background-color-blue"
                                            bordered={true}
                                            pagination={{ pageSize: 6 }}
                                            dataSource={playerInfo.player_statistics.national ? playerInfo.player_statistics.national : []}
                                            columns={clubColumns}
                                            scroll={{ x: 500 }}
                                            rowKey={(row: any) => row.name}
                                        />
                                    </TabPane>
                                    <TabPane tab="Transfers" key="4">
                                        <Table
                                            className="center padding-10 background-color-blue"
                                            bordered={true}
                                            pagination={{ pageSize: 6 }}
                                            dataSource={playerInfo.transfers ? playerInfo.transfers : []}
                                            columns={transferColumns}
                                            scroll={{ x: 500 }}
                                            rowKey={(row: any) => row.name}
                                        />
                                    </TabPane>
                                </Tabs>

                            </div>
                        </div>

                    </>
                )
            }
            <GobackButton />
        </>
    )
}

export default ViewPlayerInfo
