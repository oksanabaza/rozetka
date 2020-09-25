import React from 'react';
import './main.css';
import Cards from '../cards/cards';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CardsPage from '../cards-page/cards-page';

const Main = ({ data }) => {
  return (
    <div className="Main">
      <div className="video"><video autoplay="autoplay" loop="loop" width="100%">
        <source src="https://s0.rozetka.com.ua/video/autumnsale_2020_ru.mp4" /></video></div>
      {/* <Cards data={data} /> */}

      <Router>
        <Switch>
          <Route path="/cards">
            {<CardsPage data={data} />}
          </Route>

        </Switch>
        <div >
          <ul>

            <li>
              <Link className="link" to="/cards">
                <Cards data={data} />
              </Link>
            </li>

          </ul>
        </div>


      </Router>
    </div >



  )
};
export default Main;