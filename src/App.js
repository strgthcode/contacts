import React from 'react';
import { Layout } from 'antd';
import Heading from './components/Heading';
import Contents from './components/Content';
import Footers from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
    <Layout>
      <Heading/>
      <Contents />
      <Footers />
    </Layout>
    
  </div>
  );
}

export default App;
