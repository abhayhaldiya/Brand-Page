import React from "react";

function Contact() {
  return (
    <div className="contact">
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
          
          .form {
            position: relative;
            display: flex;
            align-items: center; /* Center vertically */
            flex-direction: column;
            gap: 10px;
            width: 300px;
            background-color: white;
            padding: 20px;
            border-radius: 10px;
          }
          
          .form .title {
            color: red;
            font-size: 30px;
            font-weight: 600;
            letter-spacing: -1px;
            line-height: 30px;
          }

          .form input, .form textarea {
            outline: 0;
            border: 1px solid rgb(219, 213, 213);
            padding: 8px 14px;
            border-radius: 8px;
            width: 100%;
          }

          .form textarea {
            height: 100px;
            resize: none;
          }

          .form button {
            padding: 8px;
            outline: 0;
            border: 0;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 500;
            background-color: #e11b1b;
            color: #fff;
            cursor: pointer;
           width:85px
          }
        `}
      </style>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="Head text-center">
              <h1
                style={{ fontSize: "80px", marginTop: "90px" }}
                className="geologica-custom"
              >
                Contact Us.
              </h1>
            </div>
            <div
              className="Body"
              style={{ marginLeft: "130px", marginTop: "30px" }}
            >
              <form className="form">
                <div className="title"></div>
                <input type="text" placeholder="Your email" className="input" />
                <textarea placeholder="Your message" defaultValue={""} />
                <button>Submit</button>
              </form>
            </div>
          </div>
          <div className="col">
            <img
              src="Nikes.png"
              alt="Wait.."
              height="545px"
              style={{ marginTop: "70px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
