import React, { useState } from 'react'
import {questions} from './api';
import "./accordian.css";
import MyAccodion from './MyAccodion';

const Accodion = () => {
  const [data,setData]=useState(questions);
  return (
    <>
    <div className='faq'>
    <section className='main-div'>
      <h1>Frequently Asked Questions</h1>
    {
      data.map((curElem)=>{
        const {id}=curElem;
        return <MyAccodion key={id} {...curElem}/>
      })
     }
     </section>
     </div>

    </>
  )
}

export default Accodion