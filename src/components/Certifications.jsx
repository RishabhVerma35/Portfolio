import React from "react";

function openImage()
{

}


function CertificatePlaceHolder(props) {
    return <div> 
      
      <div class="col">
        <div class="card shadow-sm">
        
        <div class="card-body">
          <h4 class="card-text">{props.text}</h4>   
              <button type="button" className="btn btn-sm btn-outline-secondary text-center">View</button>  
          </div>
        </div>

    </div>
  </div>;
}

function Certificate()
{
  return <div  className="bg-body-tertiary mb-2 mt-5" id="Certifications">
    <h1 className="text-center pb-2"> Certifications</h1>

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <CertificatePlaceHolder text = "AWS Cloud foundation"/>
    <CertificatePlaceHolder text = "AWS Academy Cloud Architecting"/>
    <CertificatePlaceHolder text = "Wipro Java"/>
    <CertificatePlaceHolder text = "Programming Essentials C++"/>
    <CertificatePlaceHolder text = "Programming Essentials C"/>
    <CertificatePlaceHolder text = "Cybersecurity Introduction"/>
    <CertificatePlaceHolder text = "Cybersecurity Essential"/>


    </div>
  
  </div>
   
}
  
export default Certificate;