import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import style from './App.module.css';
function App() {
  const [data,setdata]=useState([]);
  const fetchhandler=async ()=>{
    const response= await fetch('https://randomuser.me/api/?results=50');
    const data=await response.json();
    console.log(data.results);
    setdata(data.results);
  }

  useEffect(()=>{
    fetchhandler();
  },[]);
  
  return (
    <div className={style.card}>
    {data.map((idx)=>(
      <Card picture={idx.picture.large} name={idx.name} gender={idx.gender} email={idx.email}/>
    ))}
    </div>
  );
}

export default App;
