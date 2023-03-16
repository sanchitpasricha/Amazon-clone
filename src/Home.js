import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        alt=""
        src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61gvdXf4+SL._SX3000_.jpg"
      />
      <div className="home__row">
        <Product
          id="12345"
          title="Just Keep Buying : The art of creting wealth"
          price={11.96}
          rating={5}
          image="https://imgv2-1-f.scribdassets.com/img/word_document/565861428/original/216x287/3e2fe635f5/1672772495?v=1"
        />
        <Product
          id="12345"
          title="Just Keep Buying : The art of creting wealth"
          price={11.96}
          rating={5}
          image="https://imgv2-1-f.scribdassets.com/img/word_document/565861428/original/216x287/3e2fe635f5/1672772495?v=1"
        />
      </div>

      <div className="home__row">
        <Product
          id="12345"
          title="Just Keep Buying : The art of creting wealth"
          price={11.96}
          rating={5}
          image="https://imgv2-1-f.scribdassets.com/img/word_document/565861428/original/216x287/3e2fe635f5/1672772495?v=1"
        />
        <Product
          id="12345"
          title="Just Keep Buying : The art of creting wealth"
          price={11.96}
          rating={5}
          image="https://imgv2-1-f.scribdassets.com/img/word_document/565861428/original/216x287/3e2fe635f5/1672772495?v=1"
        />
        <Product
          id="12345"
          title="Just Keep Buying : The art of creting wealth"
          price={11.96}
          rating={5}
          image="https://imgv2-1-f.scribdassets.com/img/word_document/565861428/original/216x287/3e2fe635f5/1672772495?v=1"
        />
      </div>

      <div className="home__row">
        <Product
          id="12345"
          title="Just Keep Buying : The art of creting wealth"
          price={11.96}
          rating={5}
          image="https://imgv2-1-f.scribdassets.com/img/word_document/565861428/original/216x287/3e2fe635f5/1672772495?v=1"
        />
      </div>
    </div>
  );
}

export default Home;
