import React from "react";

const ProjectItems = ({ item }) => {
  return (
    <div className="project-card" key={item.id}>
      <img src={item.image} alt="" className="project-img" />
      <h3 className="project-title">{item.title}</h3>
      <p className="project-title">{item.framework}</p>
      <a href={item.url} className="project-button" target="_blank" rel="noopener noreferrer">
        Demo <i className="bx bx-right-arrow-alt" work-button-icon></i>
      </a>
    </div>
  );
};

export default ProjectItems;
