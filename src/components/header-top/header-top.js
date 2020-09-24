import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from '../posts/posts';
import './header-top.css';

const HeaderTop = ({ posts }) => {
  return (
    <div className="header-top">
      <div className="header-top-left">
        <Router>
          <div >
            <ul>
              <li>
                <Link className="link" to="/tel">
                  <img src="https://eximlab.ru/local/templates/exim_template/img/phone-mini-head.png" width='15px' />
                  (044)537-02-22</Link>
              </li>
              <li>
                <Link className="link" to="/">Контакты</Link>
              </li>
              <li>
                <Link className="link" to="/posts">Посты</Link>
              </li>
              <li>
                <Link className="link" to="/about">Помощь</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route path="/posts">
              <Posts posts={posts} />
            </Route>

          </Switch>

        </Router>
      </div>

      <div className="header-top-right">
        <div className="lang">
          <a href="#">RU |</a>
          <a href="#"> UA</a>
        </div>
        <div className="geo">
          <span>город Запорожье</span>
        </div>
        <div className="welcome">
          <div>Здравствуйте,  <a href="#"> <img src="https://img.icons8.com/emoji/48/000000/white-circle-emoji.png" width="10px" />  войдите в личный кабинет</a></div>
        </div>
      </div>
    </div>

  )
}
export default HeaderTop;