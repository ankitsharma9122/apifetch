import React from 'react';
import style from './Card.module.css';
const Card=(props)=>{
    return (
      <div className={style.card}>
      <div className={style.main}>
          <div className={style.img}>
          <img src={props.picture} className={style.outer} alt="ankit"/>
          </div>
          <div className={style.img}>
          <img src={props.picture} className={style.inner} alt="ankit"/>
          <div className={style.content}>
            <div className={style.profile} >
             {props.name.first + " " + props.name.last}
            </div>
            <div className={style.profile}>
             Gender : {props.gender}
            </div>
            <div className={style.profile}>
             Email : {props.email}
            </div>
          </div>
          <div className={style.buttonfun}>
          <button className={style.button}>see more...</button>
          </div>
          </div>
      </div>
      </div>  
    );
};

export default Card;