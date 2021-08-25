import React, { Component } from "react";

class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col" style={{ textAlign: "left" }}>
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.school}</h3>
                      <p className="info">
                        {item.degree}
                        <span>&bull;</span>{" "}
                        <em className="date">{item.duration}</em>
                      </p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col" style={{ textAlign: "left" }}>
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.company}</h3>
                      <p className="info">
                        {item.title}
                        <span>&bull;</span>{" "}
                        <em className="date">{item.duration}</em>
                      </p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Extracurricular</span>
            </h1>
          </div>

          <div className="nine columns main-col" style={{ textAlign: "left" }}>
            {resumeData.extracurricular &&
              resumeData.extracurricular.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.activity}</h3>
                      <p className="info">
                        {item.role}
                        <span>&bull;</span>{" "}
                        <em className="date">{item.duration}</em>
                      </p>
                      <p>{item.responsibilities}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
