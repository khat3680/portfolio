import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={resumeData.image} alt="" />
          </div>

          <div className="nine columns main-col" style={{ textAlign: "left" }}>
            <h2>About Me</h2>
            <p> {resumeData.bio} </p>

            <div className="row">
              <div
                className="columns contact-details"
                style={{ textAlign: "left" }}
              >
                <h2>Contact Details</h2>

                <p className="address">
                  <span>{resumeData.name}</span>
                  <br />

                  <span>
                    {" "}
                    {resumeData.address.city}, {resumeData.address.province}{" "}
                  </span>
                  <br />

                  <span> {resumeData.address.Country} </span>
                  <br />

                  <span>{resumeData.email}</span>
                  <br />
                </p>
              </div>

              <div className="columns download">
                <p>
                  <a
                    href={resumeData.resumedownload}
                    target="_blank"
                    rel="noreferrer"
                    className="button"
                  >
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
