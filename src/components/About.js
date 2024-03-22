import React from "react";

function About() {
  return (
    <div className="About">
      <style>
        {`
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

          /* Target only the "Know More" button */
          .know-more-button {
            position: relative;
            font-size: 1.2em;
            padding: 0.7em 1.4em;
            background-color: #BF0426;
            text-decoration: none;
            border: none;
            border-radius: 0.5em;
            color: #DEDEDE;
            box-shadow: 0.5em 0.5em 0.5em rgba(0, 0, 0, 0.3);
            height:55px
           
          }

          .know-more-button::before {
            position: absolute;
            content: '';
            height: 0;
            width: 0;
            top: 0;
            left: 0;
            background: linear-gradient(135deg, white 0%, white 50%, rgba(150,4,31,1) 50%, rgba(191,4,38,1) 60%);
            border-radius: 0 0 0.5em 0;
            box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.3);
            transition: 0.3s;
          }

          .know-more-button:hover::before {
            width: 1.6em;
            height: 1.6em;
          }

          .know-more-button:active {
            box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.3);
            transform: translate(0.1em, 0.1em);
          }
        `}
      </style>
      <div className="container">
        <div className="row">
          <div className="col">
            {" "}
            <img
              src="Shoe gogle.png"
              alt="Wait.."
              height="650px"
              style={{ marginRight: "122px" }}
            />
          </div>
          <div className="col">
            <div className="Head text-center">
              <h1
                style={{ fontSize: "80px", marginTop: "35px" }}
                className="geologica-custom"
              >
                About Nike.
              </h1>
            </div>
            <div className="Body  my-3" style={{ textAlign: "justify" }}>
              <p>
                Nike, a global powerhouse in athletic footwear, stands as a
                symbol of innovation and excellence. With a legacy spanning
                decades, Nike has continually pushed the boundaries of sports
                footwear, introducing groundbreaking technologies and iconic
                designs that have left an indelible mark on the industry. Every
                Nike shoe embodies a fusion of performance and style,
                meticulously crafted to deliver optimal comfort, support, and
                durability. From the legendary Air Jordan series to the
                cutting-edge Nike React line, each shoe is engineered to elevate
                your performance and make a bold statement on and off the field.
                Beyond its commitment to athletic excellence, Nike is dedicated
                to sustainability and social responsibility. Through initiatives
                like Nike Grind, which transforms old shoes into new materials,
                and investments in community programs, Nike strives to create a
                positive impact on the planet and its people. Join the millions
                of athletes, from professional stars to weekend warriors, who
                trust Nike shoes to help them reach their full potential.
                Experience the innovation, performance, and style that define
                Nike shoes and discover why Nike remains the undisputed leader
                in athletic footwear.
              </p>
            </div>
            <button
              className="know-more-button"
              onClick={() =>
                (window.location.href = "https://about.nike.com/en")
              }
            >
              <b>Know More!</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
