import React from "react";
import education from "./data/education.json";

const Education = () => {
  return (
    <>
      <div className="container edu " style={{ paddingBottom: "100px" }} id="education">
        <h1 style={{ paddingTop: "100px" }}>EDUCATION</h1>
        {education.map((data) => {
          return (
            <div
              key={data.id}
              className="edu-items d-flex align-items-center justify-content-center my-5"
              style={{
                border: "2px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="left" style={{ margin: "auto" }}>
                <img
                  style={{ height: "150px", borderRadius: "10px" }}
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
