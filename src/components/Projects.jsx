import React from "react";

const cardStyle = {

};

const element = (
    <div id="projects" className=" bg-body-tertiary">
        <h1 className="text-center">Projects</h1>

    <div className="d-md-flex flex-md-equal w-100 mt-2 mb-5 ps-md-3">

      <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden border">
        <div className="my-3 py-3">
          <h2 className="display-5">Visitor Count System With DynamoDB </h2>
        </div>
      </div>
      <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden border border-dark-subtle">
        <div className="my-3 p-3">
          <h2 className="display-5">API DATA FETCHER AND STORAGE </h2>      
        </div>
      </div>
    </div>
    
    </div>
  );
  

function Project()
{
    return element;
}
export default Project;