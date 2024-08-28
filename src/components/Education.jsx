import React from "react";
import education from "./data/education.json";
import './education.css/'

const Education = () => {
  return (
    <>
      <div className="container edu " style={{ paddingBottom: "100px" }} id="education">
        <h1 style={{ paddingTop: "100px" }}>EDUCATION</h1>
        {education.map((data) => {
          return (
            <div
              key={data.id}
              className="edu-items d-md-flex align-items-center justify-content-center my-5"
              
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="left" style={{ margin: "auto" }}>
                <img
                  style={{  }}
                  src={`/assets/${data.imageSrc}`}
                  alt={`${data.degree} logo`}
                />
              </div>
              <div className="right text-left">
                <h2>{data.degree}</h2>
                <h3>{data.institution}</h3>
                <h4>
                  <span style={{ color: "yellowgreen" }}>{data.duration}</span>
                </h4>
                {data.cgpa && (
                  <h5 style={{ color: "yellow" }}>CGPA: {data.cgpa}</h5>
                )}
                {data.percentage && (
                  <h5 style={{ color: "yellow" }}>Percentage: {data.percentage}</h5>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;
