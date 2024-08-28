import React from "react";
import skills from "./data/skills.json";
import './skills.css/'

const Skills = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1 style={{ paddingTop: "100px" }}>SKILLS</h1>
        <div className="row items d-flex justify-content-center align-items-center">
          {skills.map((data) => (
            <div
              className="item col-sm-5 col-md-3 col-lg-3 my-3"
              key={data.id}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <img src={`/assets/${data.imageSrc}`} alt="" className="imgs" />
              <h3>{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
