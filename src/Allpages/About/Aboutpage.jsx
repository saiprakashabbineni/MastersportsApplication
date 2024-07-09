import React from 'react';
import './Aboutpage.css'
const Aboutpage = () => {
  return (
    <div>
      <div>
        <div className="data bg-light">
          <div className="container-fluid pb-4">
            <div className="container">
              <div
                className="row pt-5"
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <div className="col-lg-7 mt-3">
                  <h4>WELCOME TO</h4>
                  <h2 style={{ color: 'orangered', fontWeight: 700 }}>
                    MASTER'S SPORTS
                  </h2>
                  <p className="aboutpara">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida.
                  </p>
                  <button className="ReadMore-button">Read More</button>
                </div>
                <div className="col-lg-5 d-flex justify-content-end">
                  <div className="about-image-container">
                    <img
                      src="https://img.freepik.com/free-photo/cool-black-man-doing-sports-playing-basketball-sunrise-jumping_285396-1497.jpg?t=st=1719815577~exp=1719819177~hmac=8018f80a8b877e84172eda24b29d8b223d8b1b622ef8d185bbf2e8137c995a09&w=1060"
                      alt="Image 1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
