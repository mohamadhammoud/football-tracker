import { Button } from 'antd'
import React from 'react'
import { useHistory } from 'react-router'

const GobackButton = () => {
    const history = useHistory();
    return (
        <div className="center margin" style={{ paddingBottom: 10 }}>
            <Button
                onClick={() => history.goBack()}
                type="primary"
                style={{
                    borderRadius: 30, width: 200,
                    backgroundColor: "#364d79"
                }}> Go Back</Button>
        </div>
    )
}

export default GobackButton
