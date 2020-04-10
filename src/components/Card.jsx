import React from 'react'
import {Card} from 'antd'

function Cards(props){
 return(
    <div className="site-card-border-less-wrapper">
    <Card title={props.name} bordered={false} style={{ width: 300 }}>
      <p>{props.telf}</p>
      <p>{props.email}</p>
    </Card>
  </div>
 )
}
export default Cards;