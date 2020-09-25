import React from 'react';

const CardsPage = ({ data }) => {
  const { id } = data;
  return (

    <div className="Card-page" key="id">
      this page about product # {id}

    </div>

  );
};
export default CardsPage;