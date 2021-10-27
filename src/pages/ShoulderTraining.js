import React, {useState, useEffect} from "react";
import Navbar from "../navbar";
import Footer from "../Footer";
import Commonsidebar from "../Commonsidebar";
import axios from "axios";
import {backdata, shoulderdata} from "../API/exerciseApi";

const ShoulderTraining = () => {

  const shoulderData = shoulderdata.map((data, key) => {
    return (
      
        <div className=" back-info">
          <div className="pushup-container">
            <hr />
            <h1 className="push-up text-center mt-5 mb-5 TITLE" id={data.id}>
              {data.title}
            </h1>
            <hr />
            <div className="pushup-info d-flex mt-5">
              <img src={data.gif} alt="" />
              <div>
                <h1>About:</h1>
                <p className="pushup-para">{data.info}</p>
                <br />
                <h1>How to do:</h1>
                <p className="pushup-para"> {data.direction}</p>
              </div>
            </div>
          </div>
        </div>
      
    );
  });


  return (
    <>
      <Navbar />

      <div className="back-container row d-flex">
       
          <Commonsidebar
            title1="Lateral Raise"
            title2=" Overhead Press"
            title3="Cable Pulley Fly"
            title4="Shoulder Push Press"
            title5=" Cable Face Pulls"
            title6="Straight Arm Circles"
           
          />
       

        <div className="back-data col-lg-9">
         {shoulderData}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ShoulderTraining;
