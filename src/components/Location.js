import React from "react";

function Location() {
  return (
    <>
      {" "}
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
        `}
      </style>
      <div class="row">
        <div class="col-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d79695.57407935332!2d79.13147067131939!3d28.022028951807723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710577966006!5m2!1sen!2sin"
            width="1100"
            height="680"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="col-4">
          <div
            className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary"
            style={{
              width: "480px",
              height: "670px",
              overflowY: "auto",
            }}
          >
            <a
              href="/"
              className="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom"
              style={{ marginLeft: "131px" }}
            >
              <svg className="bi pe-none me-2" width={30} height={24}>
                <use xlinkHref="#bootstrap" />
              </svg>
              <div
                className="fs-5 fw-semibold geologica-custom"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  position: "fixed",
                }}
              >
                Locations
              </div>
            </a>
            <div className="list-group list-group-flush border-bottom scrollarea">
              <a
                href="#"
                className="list-group-item list-group-item-action  py-3 lh-sm"
                aria-current="true"
              >
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1">Noida</strong>
                  <small>Wed</small>
                </div>
                <div className="col-10 mb-1 small">
                  Some placeholder content in a paragraph below the heading and
                  date.
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-3 lh-sm"
              >
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1">Delhi</strong>
                  <small className="text-body-secondary">Tues</small>
                </div>
                <div className="col-10 mb-1 small">
                  Some placeholder content in a paragraph below the heading and
                  date.
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-3 lh-sm"
              >
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1">Badaun</strong>
                  <small className="text-body-secondary">Mon</small>
                </div>
                <div className="col-10 mb-1 small">
                  Some placeholder content in a paragraph below the heading and
                  date.
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-3 lh-sm"
                aria-current="true"
              >
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1">Bareilly</strong>
                  <small className="text-body-secondary">Wed</small>
                </div>
                <div className="col-10 mb-1 small">
                  Some placeholder content in a paragraph below the heading and
                  date.
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-3 lh-sm"
              >
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1">Mohali</strong>
                  <small className="text-body-secondary">Tues</small>
                </div>
                <div className="col-10 mb-1 small">
                  Some placeholder content in a paragraph below the heading and
                  date.
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-3 lh-sm"
              >
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1">Chandigarh</strong>
                  <small className="text-body-secondary">Mon</small>
                </div>
                <div className="col-10 mb-1 small">
                  Some placeholder content in a paragraph below the heading and
                  date.
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-3 lh-sm"
                aria-current="true"
              >
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1">Greater Noida</strong>
                  <small className="text-body-secondary">Wed</small>
                </div>
                <div className="col-10 mb-1 small">
                  Some placeholder content in a paragraph below the heading and
                  date.
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-3 lh-sm"
              >
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1">Lucknow</strong>
                  <small className="text-body-secondary">Tues</small>
                </div>
                <div className="col-10 mb-1 small">
                  Some placeholder content in a paragraph below the heading and
                  date.
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-3 lh-sm"
              >
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1">Mumbai</strong>
                  <small className="text-body-secondary">Mon</small>
                </div>
                <div className="col-10 mb-1 small">
                  Some placeholder content in a paragraph below the heading and
                  date.
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-3 lh-sm"
                aria-current="true"
              >
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1">Kolkata</strong>
                  <small className="text-body-secondary">Wed</small>
                </div>
                <div className="col-10 mb-1 small">
                  Some placeholder content in a paragraph below the heading and
                  date.
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-3 lh-sm"
              >
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1">Indore</strong>
                  <small className="text-body-secondary">Tues</small>
                </div>
                <div className="col-10 mb-1 small">
                  Some placeholder content in a paragraph below the heading and
                  date.
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-3 lh-sm"
              >
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1">Bilaspur</strong>
                  <small className="text-body-secondary">Mon</small>
                </div>
                <div className="col-10 mb-1 small">
                  Some placeholder content in a paragraph below the heading and
                  date.
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
