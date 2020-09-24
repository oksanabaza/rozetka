import React from 'react';
import './aside.css'

const Aside = () => {
  return (
    <div className="Aside">
      <ul>
        <li><a> <img className="item-img" src="https://i2.rozetka.ua/goods/425508/desigual_8434101314193_image_for_search_425508510.png" alt="Смартфоны, ТВ и электроника" width="35px" />
          <span className="item">Ноутбуки и компьютеры</span></a></li>
        <li><a><img className="item-img" src="https://i2.rozetka.ua/goods/425508/desigual_8434101314193_image_for_search_425508510.png" alt="Смартфоны, ТВ и электроника" width="35px" />
          <span className="item">Смартфоны, ТВ и электроника</span></a></li>
        <li><a> <img className="item-img" src="https://i2.rozetka.ua/goods/425508/computers-notebooks_image_for_search_425508454.png" alt="Ноутбуки, планшеты и компьютерная периферия" width="35px" />
          <span className="item"> Бытовая техника</span></a></li>
        <li><a><img className="item-img" src="https://i2.rozetka.ua/goods/425508/tovary-dlya-doma_image_for_search_425508542.png" alt="Товары для дома" width="35px" />
          <span className="item">Товары для дома</span></a></li>
        <li><a><img className="item-img" src="https://i1.rozetka.ua/goods/425508/instrumenty-i-avtotovary_image_for_search_425508446.png" alt="Инструменты и автотовары" width="35px" /><span className="item">Инструменты и автотовары</span></a></li>
        <li><a><img className="item-img" src="https://i2.rozetka.ua/goods/425508/desigual_8434101238697_image_for_search_425508502.png" alt="Сантехника и ремонт" width="35px" /><span className="item">Сантехника и ремон</span></a></li>
        <li><a><img className="item-img" src="https://i2.rozetka.ua/goods/425508/dacha-sad-ogorod_image_for_search_425508438.png" alt="Дача, сад, огород " width="35px" /><span className="item">Дача, сад и огород</span></a></li>
        <li><a><img className="item-img" src="https://i2.rozetka.ua/goods/425508/sport-i-uvlecheniya_image_for_search_425508518.png" alt="Спорт и активный отдых" width="35px" /><span className="item">Спорт и увлечения</span></a></li>
        <li><a><img className="item-img" src="https://i1.rozetka.ua/goods/425508/shoes_clothes_image_for_search_425508470.png" alt="Одежда и обувь" width="35px" /><span className="item">Одежда, обувь и украшения</span></a></li>
        <li><a><img className="item-img" src="https://i2.rozetka.ua/goods/425508/krasota-i-zdorovje_image_for_search_425508462.png" alt="Красота и здоровье" width="35px" /><span className="item">Красота и здровье</span></a></li>
        <li><a><img className="item-img" src="https://i1.rozetka.ua/goods/425508/kids_image_for_search_425508534.png" alt="Товары для детей" width="35px" /><span className="item">Детские товары</span></a></li>
        <li><a><img className="item-img" src="https://i1.rozetka.ua/goods/425508/office-school-books_image_for_search_425508486.png" alt="Офис, школа, книги " width="35px" /><span className="item">Канцтовары и книги</span></a></li>
        <li><a><img className="item-img" src="https://i1.rozetka.ua/goods/425508/alkoholnie-napitki-i-produkty_image_for_search_425508422.png" alt="Напитки и продукты" width="35px" /><span className="item">Алкогольные напитки и продукты</span></a></li>
        <li><a><img className="item-img" src="https://i1.rozetka.ua/goods/425508/desigual_8434101323904_image_for_search_425508526.png" alt="Товары для бизнеса" width="35px" /><span className="item">Товары для бизнеса</span></a></li>
        <li><a><img className="item-img" src="https://i2.rozetka.ua/goods/425508/podarki-i-tovary-dlya-prazdnikov_image_for_search_425508494.png" alt="Сувениры, настольные игры" width="35px" /><span className="item">Услуги и сервисы</span></a></li>
      </ul>
    </div>
  )
};
export default Aside;
// import React, { useState, useEffect } from 'react';
// import { useRef } from 'react';
// import './aside.css'

// const Aside = () => {
//   const dropdownRef = useRef(null);
//   const [isActive, setIsActive] = useState(false);
//   const onClick = () => setIsActive(!isActive);
//   useEffect(() => {
//     const pageClickEvent = (e) => {
//       // If the active element exists and is clicked outside of
//       if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
//         setIsActive(!isActive);
//       }
//     };

//     // If the item is active (ie open) then listen for clicks
//     if (isActive) {
//       window.addEventListener('click', pageClickEvent);
//     }

//     return () => {
//       window.removeEventListener('click', pageClickEvent);
//     }

//   }, [isActive]);


//   return (
//     <div className="Aside">
//       <button onClick={onClick} className="menu-trigger-aside">
//         <ul>
//           <li onClick={onClick} className="menu-trigger-aside"><a href="/messages">Ноутбуки и компьютеры</a></li>
//           <li onClick={onClick} className="menu-trigger-aside" ><a href="/trips">Смартфоны, ТВ и электроника</a></li>
//           <li><a href="/saved">Бытовая техника</a></li>
//           <li><a href="/saved">Товары для дома</a></li>
//           <li><a href="/saved">Инструменты и автотовары</a></li>
//           <li><a href="/saved">Сфнтехника и ремонт</a></li>
//           <li><a href="/saved">Дача сад и огород</a></li>
//           <li><a href="/saved">Спорт и увлечения</a></li>
//           <li><a href="/saved">Одежда, обувь и украшения</a></li>
//           <li><a href="/saved">Красота и здоровье</a></li>
//           <li><a href="/saved">Детские товары</a></li>
//           <li><a href="/saved">Канцтовары и книги</a></li>
//           <li><a href="/saved">Алкогольные напитки и продукты</a></li>
//         </ul>

//       </button>
//       <nav ref={dropdownRef} className={`menu-aside ${isActive ? 'active' : 'inactive'}`}>
//         <ul>
//           <li><a href="/messages">Ноутбуки и компьютеры</a></li>
//           <li><a href="/trips">Смартфоны, ТВ и электроника</a></li>

//         </ul>
//       </nav>
//     </div>
//   );
// };
// export default Aside;