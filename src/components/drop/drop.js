import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import '../drop/drop.css';

const DropdownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  useEffect(() => {
    const pageClickEvent = (e) => {
      // If the active element exists and is clicked outside of
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    }

  }, [isActive]);


  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span className="drop-text"> <img className="drop-img" src="https://img.icons8.com/emoji/48/000000/white-large-square-emoji.png" width="18px" />Каталог Товаров</span>
      </button>
      <nav ref={dropdownRef} className={`menu-aside ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li><a href="#">Ноутбуки и компьютеры</a></li>
          <li><a href="#">Смартфоны, ТВ и электроника</a></li>
          <li><a href="#">Бытовая техника</a></li>
          <li><a href="#">Товары для дома</a></li>
          <li><a href="#">Инструменты и автотовары</a></li>
          <li><a href="#">Сфнтехника и ремонт</a></li>
          <li><a href="#">Дача сад и огород</a></li>
          <li><a href="#">Спорт и увлечения</a></li>
          <li><a href="#">Одежда, обувь и украшения</a></li>
          <li><a href="#">Красота и здоровье</a></li>
          <li><a href="#">Детские товары</a></li>
          <li><a href="#">Канцтовары и книги</a></li>
          <li><a href="#">Алкогольные напитки и продукты</a></li>
        </ul>
      </nav>
    </div>
  );
};
export default DropdownMenu;