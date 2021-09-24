import { Divider } from 'antd'
import React from 'react'

interface IProps {
    title: string,
    paragraph: string;
}

const TextDivider = ({ title, paragraph }: IProps) => {
    return (
        <div className="padding-10">
            <Divider className="" style={{ fontSize: 50, color: "black" }} orientation="left"> {title}</Divider>
            <div style={{ color: "black", fontSize: 14 }}>
                {paragraph}
            </div>
        </div >

    )
}

export default TextDivider
