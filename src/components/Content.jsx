import React from 'react'
import Cards from './Card';
import {Layout, Row} from 'antd';
import data from '../constants/data';

const {Content} = Layout;

function createCard (data){
    return(
        <Cards
        key={data.id} 
        name={data.name}
        telf={data.telf}
        email={data.email}    
        />
    )
    
}

function Contents(){
    return(
        <Content className='content' >
            <Row justify='space-around'>
                {data.map(createCard)}
            </Row>
        </Content>
    )
}

export default Contents;