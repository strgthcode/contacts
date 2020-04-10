import React from 'react'
import {Layout} from 'antd';

const {Footer} = Layout;

function Footers(){

    const year = new Date().getFullYear();

    return(
        <Footer className='footer'>Copyright {year}</Footer>
    )
}

export default Footers;