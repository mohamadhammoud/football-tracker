import { Button, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { getStandingById } from '../../Api/football-API';
import { CaretDownFilled, CaretUpFilled, FolderOpenFilled, FolderOpenTwoTone, MinusCircleFilled } from "@ant-design/icons"
import GobackButton from '../CustomComponents/GobackButton';

const ViewLeagueStanding = () => {
    const { id } = useParams() as any;

    const history = useHistory();

    const [data, setData] = useState<any>([]);
    useEffect(() => {
        const callStandingsById = async () => {
            const [error, data] = await getStandingById(id);
            if (!error) {
                setData(data);
            }
        }
        callStandingsById();
    }, []);


    const columns = [
        {
            title: 'Rank',
            dataIndex: 'position',
            key: 'position',
            sorter: (a: any, b: any) => a.position - b.position,
            // render: (value: string, record: any) => <span> {record.position} {value} </span>
        },
        {
            title: 'Team Name',
            dataIndex: 'team_name',
            key: 'team_name',
            width: 200,
            // sorter: (a: any, b: any) => a.team_name - b.team_name,
            render: (value: string, record: any) => <span className="font-size-20"> {value} </span>
        },
        {
            title: 'Match Played',
            dataIndex: 'overall_gp',
            key: 'overall_gp',
            width: 200,
            sorter: (a: any, b: any) => a.overall_gp - b.overall_gp,
        },
        {
            title: 'Win',
            dataIndex: 'overall_w',
            key: 'overall_w',
            sorter: (a: any, b: any) => a.overall_w - b.overall_w,
            render: (value: string) => <span style={{ color: "green" }}>{value}</span>
        },
        {
            title: 'Draw',
            dataIndex: 'overall_d',
            key: 'overall_d',
            sorter: (a: any, b: any) => a.overall_d - b.overall_d,
            render: (value: string) => <span style={{ color: "gray" }}>{value}</span>
        },
        {
            title: 'Lose',
            dataIndex: 'overall_l',
            key: 'overall_l',
            sorter: (a: any, b: any) => a.overall_l - b.overall_l,
            render: (value: string) => <span style={{ color: "red" }}>{value}</span>
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 150,
            render: (value: string) => (
                <span>
                    {value === "up" ? <span style={{ color: "green" }}> &nbsp; <CaretUpFilled translate={undefined} /> &nbsp; Up</span> : ""}
                    {value === "same" ? <span style={{ color: "gray" }}> &nbsp; <MinusCircleFilled translate={undefined} /> &nbsp; Same </span> : ""}
                    {value === "down" ? <span style={{ color: "red" }}> &nbsp; <CaretDownFilled translate={undefined} /> &nbsp; Down</span> : ""}
                </span>
            )
        },
        {
            title: 'Points',
            dataIndex: 'points',
            key: 'points',
            sorter: (a: any, b: any) => a.points - b.points,
        },
        {
            title: 'Round',
            dataIndex: 'round',
            key: 'round',
        },
        {
            title: 'Team Information',
            dataIndex: 'x',
            key: 'x',
            width: 200,
            render: (_: string, record: any) => (<Button
                type="primary"
                onClick={() => history.push(`/teaminfo/${record.team_id}`)}
                style={{ borderRadius: 30, width: 100 }}
            >
                <FolderOpenFilled />
            </Button>)
        },
    ] as any;

    return (
        <>
            <div className="map-shadow margin border-radius-10  background-color-blue">
                {
                    data.length > 0 &&
                    (
                        <div
                            style={{ color: "white" }}
                            className="padding-10 font-size-20"
                        >
                            <span> {data[0].country ? data[0].country : ""} </span>
                            &nbsp;
                            <span> Season:  {data[0].season ? data[0].season : ""}  </span>

                        </div>
                    )
                }

                <Table
                    className="center padding-10"
                    bordered={true}
                    pagination={{ pageSize: 10 }}
                    dataSource={data}
                    columns={columns}
                    scroll={{ x: 500 }}
                    rowKey={(row: any) => row.name}
                />
            </div>
            <GobackButton />
        </>
    )
}

export default ViewLeagueStanding
