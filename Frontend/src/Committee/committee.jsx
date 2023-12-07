import React from 'react'
import './committee.css'
import { Link } from "react-router-dom";

export default function committee() {
  return (
    
    <div className="main">
      <div className="container">
          <div className="paperTitle">
              <div className="title">
                 <h1>Heart Disease Prediction Using Machine Learning Algorithms</h1>
              </div>
              <div className="container-2">
                <div className="details">
                  <h3>Domain</h3>
                  <h3>Author name</h3>
                  <h4>Author mail</h4>
                  <h4>Date: 24/12/22</h4>
                </div>
                <div className="button">
                  <button className="accept">Accept</button>
                  <button className="reject">Reject</button>
                </div>
                <div className="file">
                  <h3>Download file here</h3>
                </div>
              </div>
          </div>         
      </div>
      {/* <div className="container">
          <div className="paperTitle">
              <div className="title">
                 <h1>Heart Disease Prediction Using Machine Learning Algorithms</h1>
              </div>
              <div className="container-2">
                <div className="details">
                  <h3>Domain</h3>
                  <h3>Author name</h3>
                  <h4>Author mail</h4>
                  <h4>Date: 24/12/22</h4>
                </div>
                <div className="button">
                  <button className="accept">Accept</button>
                  <button className="reject">Reject</button>
                </div>
                <div className="file">
                  <h3>Download file here</h3>
                </div>
              </div>
          </div>         
      </div> */}
    </div>
      
  )
}