import React from "react";

function Home() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img src="just do it.png" alt="" height="300px" />
            <div
              className="Headline"
              style={{ textAlign: "justify", fontWeight: "" }}
            >
              <p>
                Step into a world of limitless possibilities with Nike shoes.
                From the courts to the streets, our innovative designs fuse
                style with performance, empowering you to chase your dreams with
                every step. Join the movement of champions and redefine what it
                means to be unstoppable with Nike at your feet
              </p>
              <button
                type="button"
                class="btn btn-danger"
                style={{ borderRadius: "0", fontWeight: "bold" }}
              >
                Shop Now
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary mx-3"
                style={{ borderRadius: "0", fontWeight: "bold" }}
              >
                Category
              </button>
              <div className="Fast my-3">Also Availabe On</div>

              <div className="icons">
                <img
                  src="flipkart.png"
                  alt="Flipkart"
                  height="35px"
                  style={{ marginRight: "5px" }}
                />
                <img
                  src="amzon.png"
                  alt="Amazon"
                  style={{ marginLeft: "5px" }}
                />
              </div>
            </div>
          </div>
          <div className="col" style={{ marginTop: "30px" }}>
            <img src="shoe 2.png" alt="Wait.." height="445px" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
