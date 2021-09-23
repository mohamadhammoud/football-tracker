import { Divider } from 'antd'
import React from 'react'

interface IProps {
    title: string,
    paragraph: string;
}

const TextDivider = ({ title, paragraph }: IProps) => {
    return (
        <div className="padding-10">
            <Divider className="color-gray font-size-24" orientation="left"> {title}</Divider>
            <div>
                {paragraph}
            </div>
        </div>

    )
}

export default TextDivider
