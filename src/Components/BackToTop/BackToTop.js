import React from 'react'
import { useState, useEffect} from 'react'
import './BackToTop.css'

const BackToTop = () => {
    const[visible,setVisible]=useState(false)

    const toggleVisibility=()=>{
        if(window.pageYOffset > 1100){
            setVisible(true)
            console.log(visible)
        }else{
           setVisible(false) 
        }  
    };
  
    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth',
        })
    };

    useEffect(()=>{
    window.addEventListener('scroll',toggleVisibility)
    return ()=>{ window.removeEventListener('scroll',toggleVisibility)}
    },[])

  return (
    <div classname='scroll'>
        {visible && (
    <div onClick={scrollToTop} classname='icontainer'>
            <img className="header_logo" src="https://media2.giphy.com/media/1oDsHGhgMrQSfYXcT4/giphy.gif?cid=790b761105ee27559c4648b6679c822fc517e9790c2c5a57&rid=giphy.gif&ct=s" alt="Logo" />
        </div>
        )}
    
    </div>
  )
}

export default BackToTop