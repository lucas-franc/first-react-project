/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Product = ({ data }) => {
  return (
    <div>
      <h1>{data.nome}</h1>
      <p>R$ {data.preco}</p>
      <img src={data.fotos[0].src} alt={data.fotos[0].alt} />
    </div>
  );
};

export default Product;
