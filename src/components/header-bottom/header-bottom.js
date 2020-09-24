import React from 'react';
import DropdownMenu from '../drop/drop';
import Search from '../search/search';
import './header-bottom.css';

const HeaderBottom = () => {
  return (
    <div className="Header-bottom">
      <div className="Logo">
        <a>
          <img src="https://xl-static.rozetka.com.ua/assets/img/design/logo_n.svg" alt="Logo" />
        </a>
      </div>
      <DropdownMenu />
      <Search />

      <div className="header-icons">Попробуйте
      <div>Премиум</div></div>

      <div className="header-icons">
        <a>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAIAAAAmKNuZAAAABmJLR0QA/wD/AP+gvaeTAAAAJUlEQVRIiWP8//8/A/UAExXNGjVu1LhR40aNGzVu1LhR42hqHADN/gMx1ZyNaQAAAABJRU5ErkJggg==" />
        </a>

      </div>
      <div className="header-icons"><img src="https://img.icons8.com/metro/26/000000/checked-2.png" /> <a>

      </a></div>
    </div>
  )
};
export default HeaderBottom;