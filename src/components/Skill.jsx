import React from "react";
import Card from "./card";

const element = (
    <div className="bg-body-tertiary  " id="skills">
         <h1 className="text-center  mb-0">Skills</h1>
    <div class="row g-4 py-1 row-cols-1 row-cols-lg-3 ">
        
    <Card title = "C++" text= "Solved over 500+ LeetCode" classKaName = "text-bg-dark"/>
    <Card title = "AWS" text= "1 Year Hands on Experience on AWS "classKaName = "text-bg-dark"/>
    <Card title = "React" text= "1 Year+ Hands on Experience on React" classKaName = "text-bg-dark"/>
    <Card title = "GitHub" text= "Implement CI/CD using Github actions "/>
    <Card title = "Postgre SQL" text= "Work on Postgre SQL/ Have hands on experience of 2 months "/>
    <Card title = "TerraForm" text= "Proficient in using Terraform for infrastructure as code and automated provisioning."/>
    <Card title = "Unity" text= "Create over 30+ Games using Unity and C#" classKaName = "text-bg-dark"/>
    <Card title = "Express" text= " Developed RESTful APIs using Express.js for seamless server-side functionality and efficient data handling" classKaName = "text-bg-dark"/>
    <Card title = "Machine Learning" text= "Develop Ml models on Unity Game Engine" classKaName = "text-bg-dark"/>
    </div>
    </div>
        
 
    
  );
  

function Skills()
{
    return element;
}
export default Skills;