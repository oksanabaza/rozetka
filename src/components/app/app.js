import React, { useEffect, useState } from 'react';
import './app.css';
import Container from '../container/container';
import Header from '../header/header';
// import Cards from '../cards/cards';
// import CardsPage from '../cards-page/cards-page';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const data = await response.json();
    setPosts(data);
    console.log(data);
  };
  const data = [
    {
      src: "https://i2.rozetka.ua/goods/14835265/philips_series_1200_ep1222_00_images_14835265027.jpg",
      title: "Кофемашина PHILIPS Series 1200 EP1222/00",
      price: 9349
    },
    {
      src: "https://i2.rozetka.ua/goods/13811027/krups_essential_ea816570_images_13811027647.jpg",
      title: "Кофемашина KRUPS Essential EA816570",
      price: 10999
    },
    {
      src: "https://i8.rozetka.ua/goods/18137140/copy_acer_nx_hn5eu_00j_5eb3cfb04a2ec_images_18137140033.jpg",
      title: "Ноутбук Acer Aspire 5 A515-54G-502N (NX.HVGEU.006) Pure Silver",
      price: 17999
    },
    {
      src: "https://i8.rozetka.ua/goods/18453107/panasonic_tx_43gxr600_images_18453107893.jpg",
      title: "Телевизор Panasonic TX-43GXR600",
      price: 8499
    },
    {
      src: "https://i2.rozetka.ua/goods/19807184/motorola_paje0031rs_images_19807184203.jpg",
      title: "Мобильный телефон Motorola E6s 4/64GB Meteor Grey",
      price: 2999
    },
    {
      src: "https://i8.rozetka.ua/goods/15917628/copy_aoc_24g2u5_bk_5dfc9b80dc675_images_15917628350.jpg",
      title: "Монитор 23.8 AOC 24G2U / BK ",
      price: 4999
    },
    {
      src: "https://i1.rozetka.ua/goods/3550302/xiaomi_vxn4220gl_images_3550302767.jpg ",
      title: "УМБ Xiaomi Mi Power Bank 2C 20000 mAh QC3.0 PLM06ZM",
      price: 589
    },
    {
      src: "https://i2.rozetka.ua/goods/1857754/rapoo_v280_black_images_1857754952.jpg",
      title: "Мышь Rapoo V280 USB Black",
      price: 499
    }
  ];


  return (
    <div className="AppContainer">
      <Header posts={posts} />
      <Container data={data} />
      {/* <Router>
        <div >
          <ul>

            <li>
              <Link className="link" to="/card">
                <CardsPage />
              </Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/card">
            <CardsPage />
          </Route>

        </Switch>

      </Router> */}

    </div>
  );
};
export default App;