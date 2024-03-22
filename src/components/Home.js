import React, { useEffect, useState } from "react";

function Home() {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = (window.scrollY / totalHeight) * 100;
      let color;

      if (scrollPercentage < 30) {
        color = "#ffffff";
      } else if (scrollPercentage < 65) {
        color = "#f0f0f0";
      } else {
        color = "#d3d3d3";
      }

      setBackgroundColor(color);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        body {
          background-color: ${backgroundColor};
        }
        @import url('https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&display=swap');
        /* Define a unique and descriptive class name */
        .geologica-custom {
          /* Set the font family */
          font-family: "Geologica", sans-serif;
          /* Enable optical sizing */
          font-optical-sizing: auto;
          /* Define font weight dynamically */
          /* Use values from 100 to 900 */
          /* Replace <weight> with the desired weight value */
          font-weight: 900;
          /* Set font style to normal */
          font-style: normal;
          /* Reset font variation settings */
          font-variation-settings:
            "slnt" 0,
            "CRSV" 0,
            "SHRP" 0;
        }
      `}</style>
      <div
        className="backGround"
        style={{
          backgroundImage: `url("")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "89vh",
          margin: "0",
        }}
      >
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
                  style with performance, empowering you to chase your dreams
                  with every step. Join the movement of champions and redefine
                  what it means to be unstoppable with Nike at your feet
                </p>
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ borderRadius: "0", fontWeight: "bold" }}
                >
                  Shop Now
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary mx-3"
                  style={{ borderRadius: "0", fontWeight: "bold" }}
                >
                  Category
                </button>
                <div className="Fast my-3">Also Available On</div>
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
      </div>
      {/* Scroll 2 */}
      <div
        className="Backgroun 2"
        style={{
          backgroundImage: `url("")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
          margin: 0,
        }}
      >
        <div className="container text-center " style={{ margin: "140px" }}>
          <div className="row">
            <div className="col" style={{ marginTop: "100px" }}>
              <img src="shoe 1.png" alt="Wait.." height="445px" />
            </div>
            <div className="col">
              <div className="Head">
                <h1
                  className="geologica-custom"
                  style={{
                    fontSize: "80px",
                    textAlign: "-moz-Left",
                  }}
                >
                  Your feet deserve the best.
                </h1>
              </div>
              <div className="Body my-5">
                <p style={{ textAlign: "justify" }}>
                  Nike sports shoes boast a myriad of qualities that elevate
                  athletic performance and style. Renowned for their superior
                  comfort, Nike shoes integrate advanced cushioning technology
                  to ensure a plush and supportive feel during intense workouts.
                  With a focus on durability, these shoes are crafted from
                  premium materials, guaranteeing longevity and resilience
                  against rigorous training regimes. Nike's commitment to
                  innovation shines through in their designs, offering enhanced
                  stability and agility to athletes across various sports
                  disciplines. Beyond functionality, Nike sports shoes captivate
                  with their versatile and fashionable designs, seamlessly
                  blending performance-driven features with contemporary
                  aesthetics for a dynamic athletic experience.
                </p>
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{
                    borderRadius: "0",
                    fontWeight: "bold",
                    marginRight: "531px",
                  }}
                >
                  Shop Now
                </button>
                <div className="Fast my-3" style={{ marginRight: "510px" }}>
                  Also Available On
                </div>
                <div
                  className="icons"
                  style={{ display: "flex", marginRight: "" }}
                >
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
          </div>
        </div>
      </div>
      {/* Scroll 3 */}
      <div
        className="Backgroun 3"
        style={{
          backgroundImage: `url("")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "89vh",
        }}
      >
        <div className="container text-center" style={{ margin: "160px" }}>
          <div className="row">
            <div className="col">
              <div className="Head">
                <h1
                  className="geologica-custom"
                  style={{ fontSize: "80px", textAlign: "justify" }}
                >
                  Unmatched Quality.
                </h1>
              </div>
              <div className="Body my-5" style={{ textAlign: "justify" }}>
                Nike sneakers redefine casual comfort and urban style with their
                iconic designs and innovative features. Engineered for both
                performance and fashion, Nike sneakers effortlessly blend
                functionality with streetwear flair. From classic silhouettes to
                contemporary updates, Nike offers a diverse range of sneakers to
                suit every taste and occasion. With unparalleled cushioning and
                support, Nike sneakers provide all-day comfort for your active
                lifestyle. Step into the future of footwear with Nike sneakers,
                where versatility meets performance in every step.
              </div>
              <button
                type="button"
                className="btn btn-danger"
                style={{
                  borderRadius: "0",
                  fontWeight: "bold",
                  marginRight: "531px",
                }}
              >
                Shop Now
              </button>
              <div className="Fast my-3" style={{ marginRight: "510px" }}>
                Also Available On
              </div>
              <div className="icons" style={{ marginRight: "540px" }}>
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
            <div className="col" style={{ marginTop: "30px" }}>
              {" "}
              <img src="sneker.png" alt="wait.." height="445px" />
            </div>
          </div>
        </div>
      </div>
      {/* Scroll 4 */}
      <div
        className="Backgroun 4"
        style={{
          backgroundImage: `url("")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "89vh",
        }}
      >
        <div className="container text-center" style={{ margin: "110px" }}>
          <div className="row">
            <div className="col" style={{ marginTop: "150px" }}>
              {" "}
              <img src="Shoe3.png" alt="wait.." height="490px" />
            </div>
            <div className="col" style={{ marginTop: "30px" }}>
              <div className="Head">
                <h1
                  className="geologica-custom"
                  style={{ fontSize: "80px", textAlign: "justify" }}
                >
                  Footwear Revolution.
                </h1>
              </div>
              <div className="Body my-5" style={{ textAlign: "justify" }}>
                Nike shoes represent a pinnacle of athletic footwear, embodying
                innovation, performance, and style. Renowned for their
                cutting-edge technology and premium materials, Nike shoes offer
                unparalleled comfort and support for athletes of all levels.
                From running and basketball to lifestyle and training, Nike's
                diverse range of shoes caters to every need and preference. With
                a legacy spanning decades, Nike continues to push the boundaries
                of design and functionality, setting new standards in the
                industry. Step into greatness with Nike shoes and experience the
                perfect fusion of performance and fashion.
              </div>
              <button
                type="button"
                className="btn btn-danger"
                style={{
                  borderRadius: "0",
                  fontWeight: "bold",
                  marginRight: "531px",
                }}
              >
                Shop Now
              </button>
              <div className="Fast my-3" style={{ marginRight: "510px" }}>
                Also Available On
              </div>
              <div className="icons" style={{ marginRight: "540px" }}>
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
        </div>
      </div>
    </>
  );
}

export default Home;
