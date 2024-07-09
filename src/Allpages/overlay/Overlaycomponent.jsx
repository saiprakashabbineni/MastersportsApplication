import React from 'react'
import './overlay.css'
const Overlaycomp = () => {
  return (
    <div>
    <div>
    <div className="mainoverlay">
      <div className="container-fluid">
        <div className="container">
          <div className="image-box border p-3">
            <div className="row">
              <div className="col-lg-5 position-relative">
                <img
                  className="imagesoverlay"
                  src="https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?t=st=1719819229~exp=1719822829~hmac=6e678f60af70bd61604f04f64d0dd048fe146f1c27f5763527beb53da494bc5d&w=826"
                  alt="Shoe Collection"
                />
                <h5 className="textoverlay" style={{ color: 'white' }}>Shoe Collections</h5>
                <button className="btnoverlay">Click Here</button>
              </div>
              <div className="col-lg-7 position-relative">
                <img
                  className="imagesoverlay"
                  src="https://img.freepik.com/free-photo/professional-soccer-player-cartoon_23-2151502379.jpg?t=st=1719819258~exp=1719822858~hmac=fb8246bf89877ddf93091ffdb05e80a0736afc55be4a6b3af8fd6742e3059242&w=900"
                  alt="T-shirt Collection"
                />
                <h5 className="textoverlay" style={{ color: 'white' }}>T-shirt Collections</h5>
                <button className="btnoverlay">Click Here</button>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-lg-7 position-relative">
                <img
                  className="imagesoverlay"
                  src="https://img.freepik.com/free-vector/soccer-jersey-template-sport-t-shirt-design_29096-1244.jpg?t=st=1719819322~exp=1719822922~hmac=b847dca42e6528e9fff28b620d066738191150e6cfecff7d0ce2e66b3089dcfe&w=1060"
                  alt="Sports-kit Collection"
                />
                <h5 className="textoverlay" style={{ color: 'white' }}>Sports-kit Collections</h5>
                <button className="btnoverlay">Click Here</button>
              </div>
              <div className="col-lg-5 position-relative">
                <img
                  className="imagesoverlay"
                  src="https://img.freepik.com/free-photo/set-two-trucker-hats-with-mesh-back_23-2149410050.jpg?t=st=1719817256~exp=1719820856~hmac=1191fea8acdcbd6ffe72c8b7d54228c7ee820af4e297019cdc55c8ae5b799af5&w=1060"
                  alt="Cap Collection"
                />
                <h5 className="textoverlay" style={{ color: 'white' }}>Cap Collections</h5>
                <button className="btnoverlay">Click Here</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Overlaycomp
