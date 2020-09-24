import React from 'react';
import './cards.css';


const Cards = ({ data }) => {

  console.log(data)
  return (

    <div className="Main-cards">
      <h1 className="Main-title">ТОП-товары</h1>

      <div className="Cards">
        {data.map((data) => {
          return (<div className="Card">
            <div className="card-img"> <img src={data.src} /></div>

            <div className="card-info">
              <div className="title">{data.title}</div>
              <div className="price">{data.price}<span className="currency">₴</span></div>
            </div>

          </div>
          )
        })}


      </div>
    </div>

  )
};
export default Cards;