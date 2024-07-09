import React from 'react';
import './Newaboutcomp.css';
import Navbarcomp from '../Navbar/Navbarcomp';
import Footercomp from '../Footer/Footercomp';

const Newaboutcomp = () => {
  return (
    <div>
    
   
    <div className="maincontainer">
      <Navbarcomp />
    </div>
    <div>
    <div className="container-fluid">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="text-center aboutheader">WELCOME TO</h3>
          <h1 className="text-center aboutheading">MASTER SPORTS</h1>
          <p className="aboutparagraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="aboutparagraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-light">
  <div className="container">
    <div className="row d-flex justify-content-between aboutcontent">
      <div className="col-lg-3 text-center">
      <img src="https://img.freepik.com/premium-vector/white-hand-with-thumb-up-black-background_24886-1005.jpg" width="70px" alt="Thumbs Up" />
        <h4 style={{ color: 'orangered' }}>19 Years of Experience</h4>
        <h6 style={{ color: 'rgb(125, 116, 116)' }}>Lorem Ipsum is simply dummy text
          of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h6>
      </div>
      <div className="col-lg-3 text-center">
      <img src="https://img.freepik.com/premium-vector/white-hand-with-thumb-up-black-background_24886-1005.jpg" width="70px" alt="Thumbs Up" />
        <h4 style={{ color: 'orangered' }}>Awesome Performance</h4>
        <h6 style={{ color: 'rgb(125, 116, 116)' }}>Lorem Ipsum is simply dummy text
          of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h6>
      </div>
      <div className="col-lg-3 text-center">
      <img src="https://img.freepik.com/premium-vector/white-hand-with-thumb-up-black-background_24886-1005.jpg" width="70px" alt="Thumbs Up" />
        <h4 style={{ color: 'orangered' }}>60,00+ Happy Customers</h4>
        <h6 style={{ color: 'rgb(125, 116, 116)' }}>Lorem Ipsum is simply dummy text
          of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h6>
      </div>
    </div>
  </div>
</div>
<div>
<div className="data">
  <div className="container-fluid">
    <div className="container">
      <div className="row pt-5 pb-5" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="col-lg-6">
          <h5>WELCOME TO</h5>
          <h2 style={{ color: 'orangered', fontWeight: 700 }}>MASTER'S SPORTS</h2>
          <p style={{ lineHeight: '1.8rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum sus pendisse ultrices gravida. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum sus pendisse ultrices gravida. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida.

          </p>
          <button className="ReadMore-button">Read More</button>
        </div>

        <div className="col-lg-6" style={{ display: 'flex', justifyContent: 'space-around' }}>
          <img className="transition-image" style={{ width: '270px', borderRadius: '20px' }} src='https://img.freepik.com/free-photo/cricket-equipments-green-grass_53876-63200.jpg?w=360&t=st=1719913394~exp=1719913994~hmac=3dba63201e59a4fbc4a2bddb3048269089d638477ba4a02f36fae0c33687281f' alt="Image 1" />
          <img className="transition-image" style={{ width: '270px', borderRadius: '20px' }} src='https://img.freepik.com/free-photo/cricket-equipments-green-grass_53876-63200.jpg?w=360&t=st=1719913394~exp=1719913994~hmac=3dba63201e59a4fbc4a2bddb3048269089d638477ba4a02f36fae0c33687281f' alt="Image 2" />
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<Footercomp />
    </div>
    </div>
  );
}

export default Newaboutcomp;
