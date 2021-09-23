import { Button, Col, Divider, Input, Row, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { getAllCompetitions } from '../../Api/football-API';
import TextDivider from './TextDivider';

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
            sorter: (a: any, b: any) => a.region - b.region,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 300,
            render: (value: string, record: any) => (<Button
                type="primary"
                onClick={() => history.push(`/standings/${record.id}`)}
                style={{ borderRadius: 30, width: 250 }}
            >
                {value}
            </Button>)
        },
    ] as any;

    return (
        <Row>
            <Col className="map-shadow margin border-radius-10" md={{ span: 10 }} xs={{ span: 22 }}>
                <div
                    className="padding-top-5"
                >
                    Search: &nbsp;
                    <Input
                        style={{ width: 250, borderRadius: 30 }}
                        onChange={(e: any) => searchToCompetition(e.target.value)}
                    />
                </div>
                <Table
                    className="center padding-10"
                    bordered={true}
                    pagination={{ pageSize: 10 }}
                    dataSource={searchedCompetitions.length > 0 ? searchedCompetitions : competitions}
                    columns={columns}
                    scroll={{ x: 500 }}
                    rowKey={(row: any) => row.name}
                />
            </Col>
            <Col className="map-shadow margin border-radius-10" md={{ span: 12 }} xs={{ span: 22 }}>
                <TextDivider title="The history of football (soccer)" paragraph="Football (or soccer as the game is called in some parts of the world) has a long history. Football in its current form arose in England in the middle of the 19th century. But alternative versions of the game existed much earlier and are a part of the football history." />
                <TextDivider title="The first football clubs" paragraph="Football clubs have existed since the 15th century, but unorganized and without official status. It is therefore hard to decide which the first football club was. Some historians suggest that it was the Foot-Ball Club formed 1824 in Edinburgh. Early clubs were often formed by former school students and the first of this kind was formed in Sheffield in 1855. The oldest among professional football clubs is the English club Notts County that was formed in 1862 and still exists today.

An important step for the emergence of teams was the industrialization that led to larger groups of people meeting at places such as factories, pubs and churches. Football teams were established in the larger cities and the new railroads could bring them to other cities.

In the beginning, football was dominated by public school teams, but later, teams consisting by workers would make up the majority. Another change was successively taking place when some clubs became willing to pay the best players to join their team. This would be the start of a long period of transition, not without friction, in which the game would develop to a professional level.

The motivation behind paying players was not only to win more matches. In the 1880s the interest in the game has moved ahead to a level that tickets were sold to the matches. And finally, in 1885 professional football was legalized and three years later the Football League was established. During the first season, 12 clubs joined the league, but soon more clubs became interested and the competition would consequently expand into more divisions.

For a long time, the British teams would be dominant. After some decades, clubs from Prague, Budapest and Sienna would be the primarily contenders to the British dominance.

As with many things in history, women were for a long time excluded from participating in games. It was not before the late 19th century that women started to play football. The first official women's game took place in Inverness in 1888." />


            </Col>
        </Row>
    )
}

export default ViewCountryLeagues


