import React from 'react';
import axios from 'axios';
import "./Home.css";
import { useEffect,useState } from 'react';
import { add } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";

const Home = () => {
 const[data,setData]=useState([])
  useEffect(()=>{
  axios.get('https://fakestoreapi.com/products')
  .then((res) =>  setData(res.data))
  .catch((err) =>  console.log(err))
  },[])
  
  const dispatch = useDispatch();
  const handleAdd = ( id, title, image, price, rating ) => {
    dispatch(add({ id, title, image, price, rating }));
};

  return (
    <div>
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
</div>

</div>

<div className="container" >
{data.map((item)=>{
  return <div className="product" key={item.id}>
      <div className="product__info">
        <p>{item.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{item.price}</strong>
        </p>
      <div className="product__rating">
          {Array(item.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
      </div>
      </div>
      <img src={item.image} alt="" />
      <button onClick={()=> handleAdd( item.id, item.title, item.image, item.price, item.rating )}>Add to Basket</button>
    </div>

 })} 
  </div>
        
        
      </div>

    
  )
}

export default Home