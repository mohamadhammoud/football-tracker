import { Button, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { getStandingById } from '../../Api/football-API';
import { CaretDownFilled, CaretUpFilled, FolderOpenFilled, FolderOpenTwoTone, MinusCircleFilled } from "@ant-design/icons"
import GobackButton from '../GobackButton';

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
            title: 'Team Name',
            dataIndex: 'team_name',
            key: 'team_name',
            width: 200,
            sorter: (a: any, b: any) => a.team_name - b.team_name,
            render: (value: string, record: any) => <span> {record.position} {value} </span>
        },
        {
            title: 'Match Played',
            dataIndex: 'overall_gp',
            key: 'overall_gp',
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
            sorter: (a: any, b: any) => a.status - b.status,
            render: (value: string) => (
                <span>
                    {value === "up" ? <CaretUpFilled style={{ color: "green" }} translate={undefined} /> : ""}
                    {value === "same" ? <MinusCircleFilled style={{ color: "gray" }} translate={undefined} /> : ""}
                    {value === "down" ? <CaretDownFilled style={{ color: "red" }} translate={undefined} /> : ""}
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
            sorter: (a: any, b: any) => a.round - b.round,
        },
        {
            title: 'Team Information',
            dataIndex: 'x',
            key: 'x',
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
            <div className="map-shadow margin border-radius-10">
                {
                    data.length > 0 &&
                    (
                        <div
                            className="padding-10">
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
