import React from "react";

function openImage()
{

}


function CertificatePlaceHolder(props) {
  var filePath = "/images/Certifications/" + props.fileName;
    return <div> 
      
      <div class="col">
        <div class="card shadow-sm">
        
        <div class="card-body">
          <h4 class="card-text">{props.text}</h4>   
          <a href={filePath} target="_blank" class="btn btn-dark">View</a>  
          </div>
        </div>

    </div>
  </div>;
}

function Certificate()
{
  return <div  className="bg-body-tertiary mb-2 mt-5" id="Certifications">
    <h1 className="text-center pb-2"> -Certifications-</h1>

    <div className="row row-cols-sm-2 row-cols-md-3 g-3">
    <CertificatePlaceHolder text = "AWS Cloud foundation" fileName = "AWS_ Foundation.pdf"/>
    <CertificatePlaceHolder text = "AWS Academy Cloud Architecting" fileName = "AWS_Architect.pdf"/>
    <CertificatePlaceHolder text = "Wipro Java" fileName = "Wipro TalentNext.pdf"/>
    <CertificatePlaceHolder text = "Programming Essentials C++" fileName = "Programming EssentialsC++.pdf"/>
    <CertificatePlaceHolder text = "Programming Essentials C" fileName = "Programming EssentialsC++.pdf"/>
    <CertificatePlaceHolder text = "Cybersecurity Introduction" fileName = "CyberSecurityIntroduction.pdf"/>
    <CertificatePlaceHolder text = "Cybersecurity Essential" fileName = "CybersecurityEsential.pdf"/>


    </div>
  
  </div>
   
}
  
export default Certificate;