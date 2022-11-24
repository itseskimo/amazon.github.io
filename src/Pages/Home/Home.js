import React from 'react';
import axios from 'axios';
import "./Home.css";
import { useEffect,useState } from 'react';
import { add } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";
import BackToTop from '../../Components/BackToTop/BackToTop';
import Slider from '../../Components/Slider/Slider';
import Banner1 from '../../BannerImages/Banner1.jpg'
import Banner2 from '../../BannerImages/Banner2.jpg'
import Banner3 from '../../BannerImages/Banner3.jpg'
import Banner4 from '../../BannerImages/Banner4.jpg'
import Banner5 from '../../BannerImages/Banner5.jpg'
import Banner6 from '../../BannerImages/Banner6.jpg'
const Home = () => {

  const images=[Banner1,Banner2,Banner3,Banner4,Banner5,Banner6]

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
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}
        <Slider images={images}/>
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
        <div style={{marginTop:'10px'}}> <BackToTop/></div>
       
      </div>

    
  )
}

export default Home