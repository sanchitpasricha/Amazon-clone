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
          id="1"
          title="Just Keep Buying : The art of creting wealth"
          price={300}
          rating={5}
          image="https://imgv2-1-f.scribdassets.com/img/word_document/565861428/original/216x287/3e2fe635f5/1672772495?v=1"
        />
        <Product
          id="2"
          title="Apple iPhone 14 Pro"
          price={120000}
          rating={4}
          image="https://inventstore.in/wp-content/uploads/2022/09/4-600x600.png"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="Meta : Meta Quest Pro (experience AR)"
          price={100000}
          rating={3}
          image="https://vr-expert.com/wp-content/uploads/2022/11/metaquestpro1.png"
        />
        <Product
          id="4"
          title="Sony PlayStation 5"
          price={63500}
          rating={5}
          image="https://images-cdn.ubuy.co.in/633aa729bbf922191d10d4fa-2020-new-playstation-ps-5-console.jpg"
        />
        <Product
          id="5"
          title="Apple Macbook Air"
          price={92000}
          rating={5}
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=1078&hei=624&fmt=png-alpha&.v=1664472289059"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="One Plus Y Series LED Smart TV"
          price={25000}
          rating={5}
          image="https://img.poorvika.com/description/TV/OnePlus/oneplus-tv-y-series-audio.png"
        />
      </div>
    </div>
  );
}

export default Home;
