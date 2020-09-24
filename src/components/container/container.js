import React from 'react';
import Main from '../main/main';
import Aside from '../aside/aside';
import './container.css';

const Container = ({ data }) => {
  return (
    <div className="Container">
      <Aside />
      <Main data={data} />
    </div>
  )
}
export default Container;