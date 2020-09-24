import React from 'react';
import HeaderTop from '../header-top/header-top';
import HeaderBottom from '../header-bottom/header-bottom';
import './header.css';

const Header = ({ posts }) => {
  return (
    <div className="Header-container">
      <div className="Header">
        <HeaderTop posts={posts} />
        <HeaderBottom />
      </div>
    </div>
  )
};
export default Header;