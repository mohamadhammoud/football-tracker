import { FolderOpenFilled } from '@ant-design/icons';
import { Button, Col, Input, Row, Table, Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { getTeamById } from '../../Api/football-API';
import GobackButton from '../CustomComponents/GobackButton';

const { TabPane } = Tabs;

const ViewTeamInformation = () => {
    const { teamId } = useParams() as any;
    const history = useHistory();
    const [teamData, setTeamData] = useState<any>();
    const [searchedPlayers, setSearchedPlayers] = useState([]);

    const searchForPlayers = (value: string) => {
        if (teamData.squad) {
            const filteredResult = teamData.squad.filter((player: any) => player.name.toLowerCase().includes(value.toLowerCase()))
            setSearchedPlayers(filteredResult);
        }

    }
    useEffect(() => {
        const callTeamInfoById = async (teamId: string) => {
            const [error, data] = await getTeamById(teamId);
            if (!error) {
                console.log(data[0])
                setTeamData(data[0]);
            }
        }
        callTeamInfoById(teamId);
    }, []);

    const columns = [
        {
            title: 'Player Name',
            dataIndex: 'name',
            key: 'name',
            width: 200,
            sorter: (a: any, b: any) => a.name - b.name,
        },
        {
            title: 'Player Number',
            dataIndex: 'number',
            key: 'number',
            width: 250,
            sorter: (a: any, b: any) => a.number - b.number,
        },
        {
            title: 'Position',
            dataIndex: 'position',
            key: 'position',
            sorter: (a: any, b: any) => a.position - b.position,
            render: (value: string) => (<span>
                {value === "G" ? "Goalkeeper" : null}
                {value === "A" ? "Attacker" : null}
                {value === "D" ? "Defender" : null}
                {value === "M" ? "Midfielder" : null}
            </span>)
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: (a: any, b: any) => a.age - b.age,
        },
        {
            title: 'Appearences',
            dataIndex: 'appearences',
            key: 'appearences',
            width: 150,
            sorter: (a: any, b: any) => a.appearences - b.appearences,
        },
        {
            title: 'Goals',
            dataIndex: 'goals',
            key: 'goals',
            sorter: (a: any, b: any) => a.goals - b.goals,
        },
        {
            title: 'Assists',
            dataIndex: 'assists',
            key: 'assists',
            sorter: (a: any, b: any) => a.assists - b.assists,
        },
        {
            title: 'Injured',
            dataIndex: 'injured',
            key: 'injured',
            sorter: (a: any, b: any) => a.injured - b.injured,
        },
        {
            title: 'Minutes Played',
            dataIndex: 'minutes',
            key: 'minutes',
            width: 250,
            sorter: (a: any, b: any) => a.minutes - b.minutes,
        },
        {
            title: 'Yellow Cards',
            dataIndex: 'yellowcards',
            key: 'yellowcards',
            sorter: (a: any, b: any) => a.yellowcards - b.yellowcards,
            width: 250,
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
            width: 250,
            sorter: (a: any, b: any) => a.redcards - b.redcards,
            render: (value: string) => (
                <span style={{ color: "red" }}>
                    {value}
                </span>
            )
        },
        {
            title: 'Player Information',
            dataIndex: 'x',
            key: 'x',
            width: 300,
            render: (_: string, record: any) => (<Button
                type="primary"
                onClick={() => history.push(`/playerinfo/${record.id}`)}
                style={{ borderRadius: 30, width: 100, backgroundColor: "#364d79" }}
            >
                <FolderOpenFilled />
            </Button>)
        },

    ] as any;


    return (
        <>
            {
                teamData && (
                    <>
                        <div>
                            <section className="booking bookticket map-shadow margin border-radius-10">
                                <Row justify="center" className="center">
                                    <Col className=" font-size-24" style={{ color: "#eaeaea" }}>{teamData.name} football club</Col>
                                    {/* <Col span={12} className=""><a href="#" className="btn btn-white">book now</a></Col> */}
                                </Row>
                            </section>
                        </div>
                        <div className="map-shadow margin border-radius-10 ">
                            <div className="padding-20">
                                <span className="font-size-24"> {teamData.name} </span> Information :
                                <Tabs defaultActiveKey="1" >
                                    <TabPane tab="Founded" key="1">
                                        {teamData.founded}
                                    </TabPane>
                                    <TabPane tab="Is it national?" key="2">
                                        {teamData.is_national === "False" ? "No it's not" : "Yes it is"}
                                    </TabPane>
                                    {/* <TabPane tab="Leagues" key="3">

                                        {teamData.leagues.length > 0 ?
                                            teamData.leagues.map((league: any) => <span key={league.coach_name}> {league} &nbsp; </span>) : "No Leagues Yet"
                                        }
                                    </TabPane> */}
                                    <TabPane tab="Coach Name" key="4">
                                        {teamData.coach_name}
                                    </TabPane>
                                    <TabPane tab="City" key="5">
                                        {teamData.venue_city}
                                    </TabPane>
                                    <TabPane tab="Address" key="6">
                                        {teamData.venue_address}
                                    </TabPane>
                                    <TabPane tab="Stadium" key="7">
                                        {teamData.venue_name}
                                    </TabPane>
                                    <TabPane tab="Field Surface" key="8">
                                        {teamData.venue_surface[0].toUpperCase()}{teamData.venue_surface.substring(1)}
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                        <div className="map-shadow margin border-radius-10 background-color-blue">
                            <div
                                style={{ color: "white" }}
                                className=""
                            >

                            </div>
                            <div style={{ color: "white" }}
                                className="padding-10 font-size-20">
                                {teamData.name} Players :
                                <div className="padding-10">
                                    Search: &nbsp;
                                    <Input
                                        style={{ width: 250, borderRadius: 30 }}
                                        onChange={(e: any) => searchForPlayers(e.target.value)}
                                    />
                                </div>
                                <Table
                                    className="center"
                                    bordered={true}
                                    pagination={{ pageSize: 10 }}
                                    dataSource={searchedPlayers.length > 0 ? searchedPlayers : teamData.squad}
                                    columns={columns}
                                    scroll={{ x: 500 }}
                                    rowKey={(row: any) => row.name}
                                />
                            </div>
                        </div>
                        <GobackButton />
                    </>
                )
            }
        </>
    )
}

export default ViewTeamInformation
